# PromoParticipationType

Без указания фильтра возвращаются акции, в которых продавец участвует или может принять участие.  Какие акции вернутся при указании фильтра:  * `PARTICIPATING_NOW` — текущие акции, в которых участвует продавец.  * `PARTICIPATED` — завершенные акции, в которых продавец участвовал за последний год. Если за год их было меньше 15, в ответе придут 15 последних акций за все время. 

## Enum

* `ParticipatingNow` (value: `'PARTICIPATING_NOW'`)

* `Participated` (value: `'PARTICIPATED'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
