export const MEDIA_BY_IDS = {
    "data" : [ {
      "id" : "1409025",
      "type" : "medium",
      "attributes" : {
        "createdAt" : 1498378837159,
        "size" : 3815,
        "contentType" : "application/octet-stream",
        "url" : "http://localhost:80/uploaded/1d3a74b5754541a8b434dbb1fd76407b.jpg",
        "orignName" : "th.jpg"
      },
      "relationships" : {
        "creator" : {
          "links" : {
            "self" : "http://localhost/jsonapi/medium/1409025/relationships/creator",
            "related" : "http://localhost/jsonapi/medium/1409025/creator"
          }
        },
        "post" : {
          "links" : {
            "self" : "http://localhost/jsonapi/medium/1409025/relationships/post",
            "related" : "http://localhost/jsonapi/medium/1409025/post"
          }
        }
      },
      "links" : {
        "self" : "http://localhost/jsonapi/medium/1409025"
      }
    }, {
      "id" : "1409024",
      "type" : "medium",
      "attributes" : {
        "createdAt" : 1498378837091,
        "size" : 61,
        "contentType" : "application/octet-stream",
        "url" : "http://localhost:80/uploaded/171187c7dee74ba5a8675d74ad28db49.js",
        "orignName" : "v.js"
      },
      "relationships" : {
        "creator" : {
          "links" : {
            "self" : "http://localhost/jsonapi/medium/1409024/relationships/creator",
            "related" : "http://localhost/jsonapi/medium/1409024/creator"
          }
        },
        "post" : {
          "links" : {
            "self" : "http://localhost/jsonapi/medium/1409024/relationships/post",
            "related" : "http://localhost/jsonapi/medium/1409024/post"
          }
        }
      },
      "links" : {
        "self" : "http://localhost/jsonapi/medium/1409024"
      }
    } ],
    "links" : {
      "first" : "http://localhost/jsonapi/medium/?filter[medium][id][EQ]=1409024&filter[medium][id][EQ]=1409025&page[limit]=20",
      "last" : "http://localhost/jsonapi/medium/?filter[medium][id][EQ]=1409024&filter[medium][id][EQ]=1409025&page[limit]=20",
      "next" : null,
      "prev" : null
    },
    "meta" : {
      "totalResourceCount" : 2
    }
  };
