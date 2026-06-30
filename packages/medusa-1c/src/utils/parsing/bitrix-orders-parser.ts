import { CommerceMlAbstractParser } from "commerceml-parser";
import { OnecCounterparty, OnecDocument, OnecDocumentProduct } from "../../types";
import { convertToArray } from "./commerceml-utils";

export class BitrixOrdersParser extends CommerceMlAbstractParser {
  protected rules = {
    commercialInformation: {
      start: ["КоммерческаяИнформация"],
    },
    document: {
      start: ["КоммерческаяИнформация", "Документ"],
      include: [
        ["КоммерческаяИнформация", "Документ"],
      ],
    },
  };

  public onDocument(callback: (document: OnecDocument) => void | Promise<void>): void {
    this.eventEmitter.on("document", async (data: any) => {
      const docXml = data["Документ"];

      const counterparties: OnecCounterparty[] = [];
      for (const cpXml of convertToArray(docXml["Контрагенты"]?.["Контрагент"])) {
        const cp: OnecCounterparty = {
          id: cpXml["Ид"],
          name: cpXml["Наименование"] || cpXml["ПолноеНаименование"],
          firstName: cpXml["Имя"],
          lastName: cpXml["Фамилия"],
          middleName: cpXml["Отчество"],
        };

        for (const ci of convertToArray(cpXml["КонтактнаяИнформация"]?.["КонтактнаяИнформация"])) {
          const type: string = ci["Тип"] ?? "";
          const value: string = ci["Значение"] ?? "";
          if (type === "ЭлектроннаяПочта" && value) cp.email = value;
          else if (type === "Телефон" && value && !cp.phone) cp.phone = value;
        }

        const addressFields: string[] = [];
        for (const af of convertToArray(
          cpXml["АдресРегистрации"]?.["АдресноеПоле"] ??
          cpXml["Адрес"]?.["АдресноеПоле"]
        )) {
          if (af["Значение"]) addressFields.push(af["Значение"]);
        }
        if (addressFields.length) cp.address = addressFields.join(", ");

        counterparties.push(cp);
      }

      const products: OnecDocumentProduct[] = [];
      for (const pXml of convertToArray(docXml["Товары"]?.["Товар"])) {
        products.push({
          id: pXml["Ид"],
          name: pXml["Наименование"],
          article: pXml["Артикул"] || undefined,
          quantity: Number(pXml["КоличествоОперация"] ?? pXml["Количество"] ?? 1),
          pricePerUnit: Number(pXml["ЦенаЗаЕдиницу"] ?? 0),
          sum: Number(pXml["Сумма"] ?? 0),
        });
      }

      const requisiteValues: { name: string; value: string }[] = [];
      for (const rv of convertToArray(docXml["ЗначенияРеквизитов"]?.["ЗначениеРеквизита"])) {
        if (rv["Наименование"] && rv["Значение"] !== undefined) {
          requisiteValues.push({ name: rv["Наименование"], value: String(rv["Значение"]) });
        }
      }

      const document: OnecDocument = {
        id: docXml["Ид"],
        number: docXml["Номер"],
        date: docXml["Дата"],
        operation: docXml["ХозОперация"],
        currency: docXml["Валюта"],
        sum: docXml["Сумма"] != null ? Number(docXml["Сумма"]) : undefined,
        comment: docXml["Комментарий"] || undefined,
        counterparties,
        products,
        requisiteValues: requisiteValues.length ? requisiteValues : undefined,
      };

      await callback(document);
    });
  }
}
