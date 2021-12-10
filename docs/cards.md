# Cards

## Cards Template

| Name | Type | Discription |
| ------ | ------ | ------ | 
| id | String  | Unique key |
| authtor | Strings | person id, who create this card |
| title | String | Title cards |
| cards | Array | this is cards |
| likes | Number | users's likes |
| comments | Array | гuser's comments |

## Cards field

| Name | Type | Discription |
| ------ | ------ | ------ | 
| id | String  | Unique key |
| title | String | title this card* |
| text | Strings | text this card |
| type | string** | type of card |
| content | Object | content with type |

\* if title will be empty, then title will be title of Cards
** type can be only 'blocks2' or 'blocks4' or 'text'
'blocks2' is choising from 2 block
'blocks4' is choising from 4 block
'text' typing text

## Card's Content field

### blocks2

| Name | Type | Discription |
| ------ | ------ | ------ | 
| id | String  | Unique key |
| block1 | String | text of first block |
| block2 | Strings | text of second block |
| correct | Number* | number of correct block |
| points | Object | reward for correct answer |

\* number 'block1' is 1 and 'block2' is 2

### blocks4

| Name | Type | Discription |
| ------ | ------ | ------ | 
| id | String  | Unique key |
| block1 | String | text of first block |
| block2 | Strings | text of second block |
| block3 | String | text of third block |
| block4 | Strings | text of fourth block |
| correct | Number* | number of correct block |
| points | Object | reward for correct answer |

\* number 'block1' is 1 and 'block2' is 2 and 'block3' is 3 and 'block4' is 4

### text

| Name | Type | Discription |
| ------ | ------ | ------ | 
| id | String  | Unique key |
| text | String | user's typing text |
| correct | String | text of correct answer |
| points | Object | reward for correct answer |

## Comments field

| Name | Type | Discription |
| ------ | ------ | ------ | 
| id | String  | Unique key |
| authtor | Strings | person id, who create this comment |
| text | String | Comment's text |
| lines | Number | amount user's likes of this comment |
| comments* | Array | comment's from this comment |

\* comments by this comment have same interface