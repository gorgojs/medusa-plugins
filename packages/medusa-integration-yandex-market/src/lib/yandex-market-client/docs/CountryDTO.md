# CountryDTO

Страна и ее код в формате :no-translate[ISO 3166-1 alpha-2].

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**region** | [**RegionDTO**](RegionDTO.md) |  | [default to undefined]
**countryCode** | **string** | Страна производства в формате ISO 3166-1 alpha-2. [Как получить](../../reference/regions/getRegionsCodes.md)  | [default to undefined]

## Example

```typescript
import { CountryDTO } from './api';

const instance: CountryDTO = {
    region,
    countryCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
