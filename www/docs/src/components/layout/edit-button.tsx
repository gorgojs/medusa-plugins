import { ArrowUpRightOnBox } from "@medusajs/icons";

const translations = {
  en: {
    edited: "Edited",
    editThisPage: "Edit this page",
  },
  ru: {
    edited: "Изменено",
    editThisPage: "Редактировать страницу",
  },
} as const;

type Locale = keyof typeof translations;

type EditButtonProps = {
  filePath: string;
  editDate?: string;
  locale: string;
};

function EditDate({ date, locale }: { date: string; locale: string }) {
  const dateObj = new Date(date);

  if (isNaN(dateObj.getTime())) return null;

  const t = translations[(locale as Locale) in translations ? (locale as Locale) : "en"];

  const formatted =
    locale === "ru"
      ? dateObj.toLocaleDateString("ru-RU", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : dateObj.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        });

  return (
    <>
      <span className="text-compact-small-plus">
        {t.edited} {formatted}
      </span>
      <span className="text-compact-small">&#183;</span>
    </>
  );
}

export function EditButton({ filePath, editDate, locale }: EditButtonProps) {
  const t = translations[(locale as Locale) in translations ? (locale as Locale) : "en"];

  return (
    <div className="flex flex-wrap gap-2 mt-8 text-ui-fg-subtle">
      {editDate && <EditDate date={editDate} locale={locale} />}
      <a
        href={`https://github.com/gorgojs/medusa-plugins/edit/main${filePath}`}
        className="flex w-fit gap-1 items-center text-ui-fg-subtle hover:text-ui-fg-base text-compact-small-plus"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>{t.editThisPage}</span>
        <ArrowUpRightOnBox />
      </a>
    </div>
  );
}
