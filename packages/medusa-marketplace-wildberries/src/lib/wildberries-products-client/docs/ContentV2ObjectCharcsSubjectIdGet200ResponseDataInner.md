# ContentV2ObjectCharcsSubjectIdGet200ResponseDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**charcID** | **number** | Characteristics ID | [optional] [default to undefined]
**subjectName** | **string** | Subject name | [optional] [default to undefined]
**subjectID** | **number** | Subject ID | [optional] [default to undefined]
**name** | **string** | Characteristic name | [optional] [default to undefined]
**required** | **boolean** | Characteristic required | [optional] [default to undefined]
**unitName** | **string** | Unit (sm, gr and others) | [optional] [default to undefined]
**maxCount** | **number** | The maximum number of values that can be assigned to a characteristic when [creating](./work-with-products#tag/Creating-Product-Cards) or [editing](./work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1update/post) product cards. &lt;br&gt; Used only for characteristics with &#x60;\&quot;charcType\&quot;:1&#x60; — array of strings. &lt;br&gt; For characteristics with &#x60;\&quot;charcType\&quot;:4&#x60; — number, you can assign only one value. &lt;br&gt;&lt;br&gt; For characteristics with &#x60;\&quot;maxCount\&quot;:0&#x60;, the number of values is unlimited.  | [optional] [default to undefined]
**popular** | **boolean** | The characteristic is popular with users | [optional] [default to undefined]
**charcType** | **number** | Сharacteristic data type that should be used when [creating](./work-with-products#tag/Creating-Product-Cards) or [editing](./work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1update/post) product cards:   -  &#x60;1&#x60; — array of strings   -  &#x60;4&#x60; — integer   -  &#x60;0&#x60; — characteristic is not used  | [optional] [default to undefined]

## Example

```typescript
import { ContentV2ObjectCharcsSubjectIdGet200ResponseDataInner } from './api';

const instance: ContentV2ObjectCharcsSubjectIdGet200ResponseDataInner = {
    charcID,
    subjectName,
    subjectID,
    name,
    required,
    unitName,
    maxCount,
    popular,
    charcType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
