/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PointObject = {
    id?: number;
    /**
     * Идентификатор службы доставки
     */
    providerKey?: string;
    /**
     * Признаки отношения к другим СД, Франшизам и т.д.
     */
    providerKeyOriginal?: string;
    /**
     * Код терминала в системе службы доставки
     */
    code?: string;
    /**
     * Название
     */
    name?: string;
    /**
     * Индекс
     */
    postIndex?: string;
    /**
     * Широта
     */
    lat?: number;
    /**
     * Долгота
     */
    lng?: number;
    /**
     * Код страны
     */
    countryCode?: string;
    /**
     * Регион
     */
    region?: string;
    /**
     * Тип региона
     */
    regionType?: string;
    /**
     * Город
     */
    city?: string;
    /**
     * ФИАС-код города
     */
    cityGuid?: string;
    /**
     * Тип города
     */
    cityType?: string;
    /**
     * Населенный пункт
     */
    community?: string;
    /**
     * ФИАС-код населенного пункта
     */
    communityGuid?: string;
    /**
     * Тип населенного пункта
     */
    communityType?: string;
    /**
     * Район
     */
    area?: string;
    /**
     * Улица
     */
    street?: string;
    /**
     * Тип улицы (ул., переулок и т.п.)
     */
    streetType?: string;
    /**
     * Дом
     */
    house?: string;
    /**
     * Корпус
     */
    block?: string;
    /**
     * Офис
     */
    office?: string;
    /**
     * Полный адрес, полученный от СД
     */
    address?: string;
    /**
     * Домашняя страница
     */
    url?: string;
    /**
     * email
     */
    email?: string;
    /**
     * Телефон
     */
    phone?: string;
    /**
     * Режим работы
     */
    timetable?: string;
    /**
     * Режим работы по дням (1 - пн; 7 - вс) Отсутствие дня означает выходной
     */
    worktime?: {
        /**
         * Время работы в понедельник
         */
        '1'?: string;
        /**
         * Время работы во вторник
         */
        '2'?: string;
        /**
         * Время работы в среду
         */
        '3'?: string;
        /**
         * Время работы в четверг
         */
        '4'?: string;
        /**
         * Время работы в пятницу
         */
        '5'?: string;
        /**
         * Время работы в субботу
         */
        '6'?: string;
        /**
         * Время работы в воскресенье
         */
        '7'?: string;
    };
    /**
     * Наличие примерочной
     */
    fittingRoom?: number;
    /**
     * Имеется ли возможность оплаты при доставке (null - нет данных, 1 - оплата доступна, 0 - оплата не доступна)
     */
    cod?: number;
    /**
     * Имеется ли возможность оплаты наличными (null - нет данных, 1 - оплата наличными доступна, 0 - оплата наличными не доступна)
     */
    paymentCash?: number;
    /**
     * Имеется ли возможность оплаты банковской картой (null - нет данных, 1 - оплата картой доступна, 0 - оплата картой не доступна)
     */
    paymentCard?: number;
    /**
     * Возможна ли выдача многоместных отправлений (null - нет данных, 1 - выдача возможна, 0 - выдача невозможна)
     */
    multiplaceDeliveryAllowed?: number;
    /**
     * Тип операции (1 - прием, 2 - выдача, 3 - прием и выдача)
     */
    availableOperation?: number;
    /**
     * Тип точки (1 - Пункт выдачи заказа, 2 - Постамат, 3 - Отделение Почты России, 4 - Терминал)
     */
    type?: number;
    /**
     * Описание ПВЗ, как пройти
     */
    description?: string;
    photos?: Array<string>;
    /**
     * Список ближайших станций метро (до трёх штук)
     */
    metro?: Array<{
        /**
         * Название метро
         */
        name?: string;
        /**
         * Расстояние до метро в км
         */
        distance?: number;
        /**
         * Линия метро
         */
        line?: string;
    }>;
    /**
     * Дополнительные параметры для службы
     */
    extra?: Array<{
        /**
         * Название дополнительного параметра
         */
        key?: string;
        /**
         * Значение дополнительного параметра
         */
        value?: string;
    }>;
    limits?: {
        /**
         * Максимальная длина стороны А в см
         */
        maxSizeA?: number;
        /**
         * Максимальная длина стороны B в см
         */
        maxSizeB?: number;
        /**
         * Максимальная длина стороны С в см
         */
        maxSizeC?: number;
        /**
         * Максимальная сумма длин всех сторон в см
         */
        maxSizeSum?: number;
        /**
         * Минимальный вес в г
         */
        minWeight?: number;
        /**
         * Максимальный вес в г
         */
        maxWeight?: number;
        /**
         * Максимальная сумма наложенного платежа в рублях
         */
        maxCod?: number;
        /**
         * Максимальный объем в см3
         */
        maxVolume?: number;
    };
    /**
     * Доступность пункта
     */
    enabled?: boolean;
};

