# AdditionalServiceObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**providerKey** | **string** | Идентификатор службы доставки | [optional] [default to undefined]
**name** | **string** | Название услуги | [optional] [default to undefined]
**extraParamName** | **string** | Ключ в extraParams | [optional] [default to undefined]
**valueType** | **string** | Тип значения для extraParams:  * &#x60;bool&#x60; - булев тип значения, принимает *true, false, 0, 1*  * &#x60;string&#x60; - строковый тип значения, принимает *\&quot;\&quot;, \&quot;qwerty123\&quot;*  * &#x60;int&#x60; - целочисленный тип значения, принимает *1, 2, 3, 4, 5, 6*  * &#x60;float&#x60; - число с плавающей точкой, принимает *999.123, 6343.7898*  | [optional] [default to undefined]
**valueDescription** | **string** | Описание типа значения для extraParams | [optional] [default to undefined]
**description** | **string** | Описание услуги | [optional] [default to undefined]

## Example

```typescript
import { AdditionalServiceObject } from './api';

const instance: AdditionalServiceObject = {
    providerKey,
    name,
    extraParamName,
    valueType,
    valueDescription,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
