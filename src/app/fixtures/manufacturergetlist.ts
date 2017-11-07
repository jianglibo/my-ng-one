export const MANUFACTURERS_BODY = {
    "data" : [ {
      "id" : "1277953",
      "type" : "manufacturers",
      "attributes" : {
        "createdAt" : 1508803855674,
        "foundTime" : null,
        "nationality" : "Japan",
        "founder" : "",
        "legend" : "hello. world.",
        "name" : "kawasaki",
        "logo" : "abc/aa.gif",
        "websites" : {
          "en" : "https://www.kawasaki.com",
          "zh" : "http://www.kawasaki-motors.cn"
        },
        "dtoAction" : null,
        "dtoApplyTo" : null
      },
      "relationships" : {
        "mtSerieses" : {
          "links" : {
            "self" : "http://localhost/jsonapi/manufacturers/1277953/relationships/mtSerieses",
            "related" : "http://localhost/jsonapi/manufacturers/1277953/mtSerieses"
          }
        }
      },
      "links" : {
        "self" : "http://localhost/jsonapi/manufacturers/1277953"
      }
    } ],
    "links" : {
      "first" : "http://localhost/jsonapi/manufacturers/?page[limit]=20&filter[manufacturers][name][EQ]=kawasaki",
      "last" : "http://localhost/jsonapi/manufacturers/?page[limit]=20&filter[manufacturers][name][EQ]=kawasaki",
      "next" : null,
      "prev" : null
    },
    "meta" : {
      "totalResourceCount" : 1
    }
  };