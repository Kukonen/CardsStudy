# Cards

## Cards Template

| Name | Type | Discription |
| ------ | ------ | ------ | 
| id | String  | Unique key |
| authtor | String | person id, who create this card |
| title | String | Title cards |
| cards | Array | this is cards |
| likes | String[] | id users who likes |
| comments | Array | user's comments |

## Cards field

| Name    | Type     | Discription                                         |
|---------|----------|-----------------------------------------------------| 
| id      | String   | Unique key                                          |
| title   | String   | title this card*                                    |
| text    | String   | text this card                                      |
| type    | string** | type of card                                        |
| content | Object   | content with type                                   |
| points  | Number   | reward for correct answer |

\* if title will be empty, then title will be title of Cards
** type can be only 'blocks2' or 'blocks4' or 'text'
'blocks2' is choising from 2 block
'blocks4' is choising from 4 block
'text' typing text

## Card's Content field

## Content
| Name | Type                                    | Discription                                |
|------|-----------------------------------------|--------------------------------------------| 
| id   | String                                  | Unique key                                 |
| answer | Object <br/> (block2 or block4 or text) | objects contain corrct answers, disclosed further |

### blocks2

| Name | Type | Discription |
| ------ | ------ | ------ | 
| id | String  | Unique key |
| block1 | String | text of first block |
| block2 | String | text of second block |
| correct | Number* | number of correct block |

\* number 'block1' is 1 and 'block2' is 2

### blocks4

| Name | Type | Discription |
| ------ | ------ | ------ | 
| id | String  | Unique key |
| block1 | String | text of first block |
| block2 | String | text of second block |
| block3 | String | text of third block |
| block4 | String | text of fourth block |
| correct | Number* | number of correct block |

\* number 'block1' is 1 and 'block2' is 2 and 'block3' is 3 and 'block4' is 4

### text

| Name | Type | Discription |
| ------ | ------ | ------ | 
| id | String  | Unique key |
| correct | String | text of correct answer |

## Comments field

| Name | Type | Discription |
| ------ | ------ | ------ | 
| id | String  | Unique key |
| authtor | String | person id, who create this comment |
| text | String | Comment's text |
| likes | String[] | amount user's likes of this comment |
| comments* | Array | comment's from this comment |

\* comments by this comment have same interface

## Results field

| Name | Type | Discription |
| ------ | ------ | ------ | 
| id | String  | Unique key |
| title | String | title of this result |
| text | String | text of this result |
| points | Number | how much points need to get this result |