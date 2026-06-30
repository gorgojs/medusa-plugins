type OrderItem = {
  id: string;
  title: string;
  variant_sku?: string;
  onec_product_id?: string;
  onec_characteristic_id?: string;
  quantity?: number;
  unit_price: number;
  detail?: { quantity?: number };
  variant_option_values?: Record<string, unknown>;
};

type OrderAddress = {
  first_name?: string;
  last_name?: string;
  address_1?: string;
  address_2?: string;
  city?: string;
  phone?: string;
  postal_code?: string;
};

type MedusaOrderForExport = {
  id: string;
  display_id: number;
  status: string;
  email?: string;
  currency_code: string;
  total?: number;
  created_at: string | Date;
  customer?: { id?: string; first_name?: string; last_name?: string; email?: string };
  shipping_address?: OrderAddress;
  items: OrderItem[];
};

function escapeXml(value: string | undefined | null): string {
  if (!value) return "";
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function formatDate(iso: string | Date | undefined | null): string {
  if (!iso) return "";
  const str = typeof iso === "string" ? iso : (iso as Date).toISOString();
  return str.substring(0, 10);
}

function formatTime(iso: string | Date | undefined | null): string {
  if (!iso) return "00:00:00";
  const str = typeof iso === "string" ? iso : (iso as Date).toISOString();
  return str.substring(11, 19);
}

function addDays(date: string | Date, days: number): string {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d.toISOString().substring(0, 10);
}

export function buildOrdersXml(orders: MedusaOrderForExport[]): string {
  const now = new Date().toISOString().substring(0, 19);
  const lines: string[] = [];

  lines.push(`<?xml version="1.0" encoding="UTF-8"?>`);
  lines.push(`<КоммерческаяИнформация ВерсияСхемы="2.10" ДатаФормирования="${now}">`);

  for (const order of orders) {
    const firstName = order.shipping_address?.first_name || order.customer?.first_name || "";
    const lastName = order.shipping_address?.last_name || order.customer?.last_name || "";
    const buyerName = [firstName, lastName].filter(Boolean).join(" ") || order.email || `Заказ #${order.display_id}`;
    const fullName = buyerName;

    const email = order.email || order.customer?.email || "";
    const phone = order.shipping_address?.phone || "";
    const address = [order.shipping_address?.address_1, order.shipping_address?.address_2].filter(Boolean).join(", ");
    const city = order.shipping_address?.city || "";
    const postalCode = order.shipping_address?.postal_code || "";
    const buyerId = order.customer?.id || order.email || order.id;
    const currencyUpper = (order.currency_code || "RUB").toUpperCase();

    const itemsTotal = (order.items ?? []).reduce((sum, item) => {
      const qty = Number(item.quantity || item.detail?.quantity || 1);
      return sum + Number(item.unit_price) * qty;
    }, 0);

    const total = (order.total != null && Number(order.total) > 0
      ? Number(order.total)
      : itemsTotal
    ).toFixed(2);

    const orderDate = formatDate(order.created_at);
    const shipmentDate = order.created_at ? addDays(order.created_at, 7) : orderDate;

    lines.push(`  <Документ>`);
    lines.push(`    <Ид>${escapeXml(order.id)}</Ид>`);
    lines.push(`    <Номер>${escapeXml(String(order.display_id))}</Номер>`);
    lines.push(`    <Дата>${orderDate}</Дата>`);
    lines.push(`    <Время>${formatTime(order.created_at)}</Время>`);
    lines.push(`    <ХозОперация>Заказ товара</ХозОперация>`);
    lines.push(`    <Роль>Продавец</Роль>`);
    lines.push(`    <Валюта>${escapeXml(currencyUpper)}</Валюта>`);
    lines.push(`    <Курс>1</Курс>`);
    lines.push(`    <Сумма>${total}</Сумма>`);
    lines.push(`    <Контрагенты>`);
    lines.push(`      <Контрагент>`);
    lines.push(`        <Ид>${escapeXml(buyerId)}</Ид>`);
    lines.push(`        <Наименование>${escapeXml(buyerName)}</Наименование>`);
    lines.push(`        <Роль>Покупатель</Роль>`);
    lines.push(`        <ПолноеНаименование>${escapeXml(fullName)}</ПолноеНаименование>`);
    if (lastName) lines.push(`        <Фамилия>${escapeXml(lastName)}</Фамилия>`);
    if (firstName) lines.push(`        <Имя>${escapeXml(firstName)}</Имя>`);

    if (address || city || postalCode) {
      lines.push(`        <АдресРегистрации>`);
      if (postalCode) {
        lines.push(`          <АдресноеПоле>`);
        lines.push(`            <Тип>Почтовый индекс</Тип>`);
        lines.push(`            <Значение>${escapeXml(postalCode)}</Значение>`);
        lines.push(`          </АдресноеПоле>`);
      }
      if (city) {
        lines.push(`          <АдресноеПоле>`);
        lines.push(`            <Тип>Город</Тип>`);
        lines.push(`            <Значение>${escapeXml(city)}</Значение>`);
        lines.push(`          </АдресноеПоле>`);
      }
      if (address) {
        lines.push(`          <АдресноеПоле>`);
        lines.push(`            <Тип>Улица</Тип>`);
        lines.push(`            <Значение>${escapeXml(address)}</Значение>`);
        lines.push(`          </АдресноеПоле>`);
      }
      lines.push(`        </АдресРегистрации>`);
    }

    lines.push(`        <Контакты>`);
    if (email) {
      lines.push(`          <Контакт>`);
      lines.push(`            <Тип>Почта</Тип>`);
      lines.push(`            <Значение>${escapeXml(email)}</Значение>`);
      lines.push(`          </Контакт>`);
    }
    if (phone) {
      lines.push(`          <Контакт>`);
      lines.push(`            <Тип>Телефон</Тип>`);
      lines.push(`            <Значение>${escapeXml(phone)}</Значение>`);
      lines.push(`          </Контакт>`);
    }
    lines.push(`        </Контакты>`);

    lines.push(`      </Контрагент>`);
    lines.push(`    </Контрагенты>`);

    if (order.items?.length) {
      lines.push(`    <Товары>`);
      for (const item of order.items) {
        const qty = Number(item.quantity || item.detail?.quantity || 1);
        const unitPrice = Number(item.unit_price).toFixed(2);
        const itemTotal = (Number(item.unit_price) * qty).toFixed(2);
        lines.push(`      <Товар>`);
        const productId = item.onec_product_id || item.variant_sku || item.id;
        const fullId = item.onec_characteristic_id ? `${productId}#${item.onec_characteristic_id}` : productId;
        lines.push(`        <Ид>${escapeXml(fullId)}</Ид>`);
        lines.push(`        <Наименование>${escapeXml(item.title)}</Наименование>`);
        if (item.variant_sku) {
          lines.push(`        <Артикул>${escapeXml(item.variant_sku)}</Артикул>`);
        }
        lines.push(`        <БазоваяЕдиница Код="796" НаименованиеПолное="Штука" МеждународноеСокращение="PCE">шт</БазоваяЕдиница>`);
        lines.push(`        <ЦенаЗаЕдиницу>${unitPrice}</ЦенаЗаЕдиницу>`);
        lines.push(`        <Количество>${qty}</Количество>`);
        lines.push(`        <Сумма>${itemTotal}</Сумма>`);

        const optionEntries = Object.entries(item.variant_option_values ?? {})
          .filter(([k]) => k !== "Default Option");
        if (optionEntries.length) {
          lines.push(`        <ХарактеристикиТовара>`);
          for (const [name, value] of optionEntries) {
            lines.push(`          <ХарактеристикаТовара>`);
            lines.push(`            <Наименование>${escapeXml(name)}</Наименование>`);
            lines.push(`            <Значение>${escapeXml(String(value))}</Значение>`);
            lines.push(`          </ХарактеристикаТовара>`);
          }
          lines.push(`        </ХарактеристикиТовара>`);
        }

        lines.push(`        <ЗначенияРеквизитов>`);
        lines.push(`          <ЗначениеРеквизита>`);
        lines.push(`            <Наименование>ВидНоменклатуры</Наименование>`);
        lines.push(`            <Значение>Товар</Значение>`);
        lines.push(`          </ЗначениеРеквизита>`);
        lines.push(`          <ЗначениеРеквизита>`);
        lines.push(`            <Наименование>ТипНоменклатуры</Наименование>`);
        lines.push(`            <Значение>Товар</Значение>`);
        lines.push(`          </ЗначениеРеквизита>`);
        lines.push(`        </ЗначенияРеквизитов>`);
        lines.push(`      </Товар>`);
      }
      lines.push(`    </Товары>`);
    }

    lines.push(`    <ЗначенияРеквизитов>`);
    lines.push(`      <ЗначениеРеквизита>`);
    lines.push(`        <Наименование>Статус заказа</Наименование>`);
    lines.push(`        <Значение>${escapeXml(order.status)}</Значение>`);
    lines.push(`      </ЗначениеРеквизита>`);
    lines.push(`      <ЗначениеРеквизита>`);
    lines.push(`        <Наименование>Дата отгрузки</Наименование>`);
    lines.push(`        <Значение>${shipmentDate}</Значение>`);
    lines.push(`      </ЗначениеРеквизита>`);
    lines.push(`      <ЗначениеРеквизита>`);
    lines.push(`        <Наименование>Заказ оплачен</Наименование>`);
    lines.push(`        <Значение>false</Значение>`);
    lines.push(`      </ЗначениеРеквизита>`);
    lines.push(`      <ЗначениеРеквизита>`);
    lines.push(`        <Наименование>Отменен</Наименование>`);
    lines.push(`        <Значение>false</Значение>`);
    lines.push(`      </ЗначениеРеквизита>`);
    lines.push(`    </ЗначенияРеквизитов>`);

    lines.push(`  </Документ>`);
  }

  lines.push(`</КоммерческаяИнформация>`);
  return lines.join("\n");
}
