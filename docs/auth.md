# Auth api

#### register
request
| Variable | Type |
| ------ | ------ |
| name | string |
| email | string |
| password | string |

response
| Variable | Type |
| ------ | ------ |
| name | string |
| avatar | undefined |
| role | string |

#### login

request
| Variable | Type |
| ------ | ------ |
| email | string |
| password | string |

response
| Variable | Type |
| ------ | ------ |
| name | string |
| avatar | string \| undefined |
| role | string |