import { Counterparty } from "commerceml-parser-core"

export function parseCounterpartyXmlData(xmlData: any): Counterparty {
  const counterparty: Counterparty = {
    id: xmlData["Ид"],
    name: xmlData["Наименование"],
  }

  if (xmlData["ОфициальноеНаименование"]) {
    if (xmlData["ОфициальноеНаименование"]) {
      counterparty.officialName = xmlData["ОфициальноеНаименование"]
    }
    if (xmlData["ИНН"]) {
      counterparty.inn = xmlData["ИНН"]
    }
    if (xmlData["КПП"]) {
      counterparty.kpp = xmlData["КПП"]
    }
    if (xmlData["ОКПО"]) {
      counterparty.okpo = xmlData["ОКПО"]
    }
  } else {
    if (xmlData["ПолноеНаименование"]) {
      counterparty.fullName = xmlData["ПолноеНаименование"]
    }
    if (xmlData["Обращение"]) {
      counterparty.title = xmlData["Обращение"]
    }
    if (xmlData["Фамилия"]) {
      counterparty.lastName = xmlData["Фамилия"]
    }
    if (xmlData["Имя"]) {
      counterparty.firstName = xmlData["Имя"]
    }
    if (xmlData["Отчество"]) {
      counterparty.middleName = xmlData["Отчество"]
    }
  }

  return counterparty
}

export function convertToArray<T>(arrayOrSingleValue: T): T[] {
  if (arrayOrSingleValue === undefined) {
    return []
  }
  if (!Array.isArray(arrayOrSingleValue)) {
    return [arrayOrSingleValue]
  }
  return arrayOrSingleValue
}
