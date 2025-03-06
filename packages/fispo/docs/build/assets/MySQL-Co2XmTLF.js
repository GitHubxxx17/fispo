import { j as jsxRuntimeExports } from "./client-entry-GRh2m7il.js";
const frontmatter = {
  "title": "MYSQL",
  "categories": "笔记",
  "date": "2022-09-22 00:00:00",
  "tags": ["笔记"],
  "cover": "http://GitHubxxx17.github.io/img/post_cover/6.jpg"
};
const mdInfo = "基础篇通用语法及分类DDL: 数据定义语言，用来定义数据库对象（数据库、表、字段）DML: 数据操作语言，用来对数据库表中的数据进行增删改DQL: 数据查询语言，用来查询数据库中表的记录DCL: 数据控制语言，用来创建数据库用户、控制数据库的控制权限DDL（数据定义语言）数据定义语言数据库操作查询所";
const toc = [{
  "id": "基础篇",
  "text": "基础篇",
  "depth": 1
}, {
  "id": "通用语法及分类",
  "text": "通用语法及分类",
  "depth": 2
}, {
  "id": "ddl数据定义语言",
  "text": "DDL（数据定义语言）",
  "depth": 3
}, {
  "id": "数据库操作",
  "text": "数据库操作",
  "depth": 4
}, {
  "id": "注意事项",
  "text": "注意事项",
  "depth": 5
}, {
  "id": "表操作",
  "text": "表操作",
  "depth": 4
}, {
  "id": "dml数据操作语言",
  "text": "DML（数据操作语言）",
  "depth": 3
}, {
  "id": "添加数据",
  "text": "添加数据",
  "depth": 4
}, {
  "id": "注意事项-1",
  "text": "注意事项",
  "depth": 5
}, {
  "id": "更新和删除数据",
  "text": "更新和删除数据",
  "depth": 4
}, {
  "id": "dql数据查询语言",
  "text": "DQL（数据查询语言）",
  "depth": 3
}, {
  "id": "基础查询",
  "text": "基础查询",
  "depth": 4
}, {
  "id": "条件查询",
  "text": "条件查询",
  "depth": 4
}, {
  "id": "聚合查询聚合函数",
  "text": "聚合查询（聚合函数）",
  "depth": 4
}, {
  "id": "分组查询",
  "text": "分组查询",
  "depth": 4
}, {
  "id": "注意事项-2",
  "text": "注意事项",
  "depth": 5
}, {
  "id": "排序查询",
  "text": "排序查询",
  "depth": 4
}, {
  "id": "注意事项-3",
  "text": "注意事项",
  "depth": 5
}, {
  "id": "分页查询",
  "text": "分页查询",
  "depth": 4
}, {
  "id": "注意事项-4",
  "text": "注意事项",
  "depth": 5
}, {
  "id": "dql执行顺序",
  "text": "DQL执行顺序",
  "depth": 4
}, {
  "id": "dcl",
  "text": "DCL",
  "depth": 3
}, {
  "id": "管理用户",
  "text": "管理用户",
  "depth": 4
}, {
  "id": "注意事项-5",
  "text": "注意事项",
  "depth": 5
}, {
  "id": "权限控制",
  "text": "权限控制",
  "depth": 4
}, {
  "id": "注意事项-6",
  "text": "注意事项",
  "depth": 5
}, {
  "id": "函数",
  "text": "函数",
  "depth": 2
}, {
  "id": "字符串函数",
  "text": "字符串函数",
  "depth": 3
}, {
  "id": "数值函数",
  "text": "数值函数",
  "depth": 3
}, {
  "id": "日期函数",
  "text": "日期函数",
  "depth": 3
}, {
  "id": "流程函数",
  "text": "流程函数",
  "depth": 3
}, {
  "id": "约束",
  "text": "约束",
  "depth": 2
}, {
  "id": "常用约束",
  "text": "常用约束",
  "depth": 3
}, {
  "id": "外键约束",
  "text": "外键约束",
  "depth": 3
}, {
  "id": "删除更新行为",
  "text": "删除/更新行为",
  "depth": 4
}, {
  "id": "多表查询",
  "text": "多表查询",
  "depth": 2
}, {
  "id": "多表关系",
  "text": "多表关系",
  "depth": 3
}, {
  "id": "一对多",
  "text": "一对多",
  "depth": 4
}, {
  "id": "多对多",
  "text": "多对多",
  "depth": 4
}, {
  "id": "一对一",
  "text": "一对一",
  "depth": 4
}, {
  "id": "查询",
  "text": "查询",
  "depth": 3
}, {
  "id": "内连接查询",
  "text": "内连接查询",
  "depth": 3
}, {
  "id": "外连接查询",
  "text": "外连接查询",
  "depth": 3
}, {
  "id": "自连接查询",
  "text": "自连接查询",
  "depth": 3
}, {
  "id": "联合查询-union-union-all",
  "text": "联合查询 union, union all",
  "depth": 3
}, {
  "id": "注意事项-7",
  "text": "注意事项",
  "depth": 4
}, {
  "id": "子查询",
  "text": "子查询",
  "depth": 3
}, {
  "id": "标量子查询",
  "text": "标量子查询",
  "depth": 4
}, {
  "id": "列子查询",
  "text": "列子查询",
  "depth": 4
}, {
  "id": "行子查询",
  "text": "行子查询",
  "depth": 4
}, {
  "id": "表子查询",
  "text": "表子查询",
  "depth": 4
}, {
  "id": "事务",
  "text": "事务",
  "depth": 2
}, {
  "id": "四大特性acid",
  "text": "四大特性ACID",
  "depth": 3
}, {
  "id": "并发事务",
  "text": "并发事务",
  "depth": 3
}, {
  "id": "进阶篇",
  "text": "进阶篇",
  "depth": 1
}, {
  "id": "存储引擎",
  "text": "存储引擎",
  "depth": 2
}, {
  "id": "innodb",
  "text": "InnoDB",
  "depth": 3
}, {
  "id": "myisam",
  "text": "MyISAM",
  "depth": 3
}, {
  "id": "memory",
  "text": "Memory",
  "depth": 3
}, {
  "id": "存储引擎特点",
  "text": "存储引擎特点",
  "depth": 3
}, {
  "id": "存储引擎的选择",
  "text": "存储引擎的选择",
  "depth": 3
}, {
  "id": "性能分析",
  "text": "性能分析",
  "depth": 2
}, {
  "id": "查看执行频次",
  "text": "查看执行频次",
  "depth": 3
}, {
  "id": "慢查询日志",
  "text": "慢查询日志",
  "depth": 3
}, {
  "id": "profile",
  "text": "profile",
  "depth": 3
}, {
  "id": "explain",
  "text": "explain",
  "depth": 3
}, {
  "id": "索引",
  "text": "索引",
  "depth": 2
}, {
  "id": "索引结构",
  "text": "索引结构",
  "depth": 3
}, {
  "id": "b-tree",
  "text": "B-Tree",
  "depth": 4
}, {
  "id": "btree",
  "text": "B+Tree",
  "depth": 4
}, {
  "id": "hash",
  "text": "Hash",
  "depth": 4
}, {
  "id": "面试题",
  "text": "面试题",
  "depth": 4
}, {
  "id": "索引分类",
  "text": "索引分类",
  "depth": 3
}, {
  "id": "思考题",
  "text": "思考题",
  "depth": 4
}, {
  "id": "语法",
  "text": "语法",
  "depth": 3
}, {
  "id": "使用规则",
  "text": "使用规则",
  "depth": 3
}, {
  "id": "最左前缀法则",
  "text": "最左前缀法则",
  "depth": 4
}, {
  "id": "索引失效情况",
  "text": "索引失效情况",
  "depth": 4
}, {
  "id": "sql-提示",
  "text": "SQL 提示",
  "depth": 4
}, {
  "id": "覆盖索引回表查询",
  "text": "覆盖索引&回表查询",
  "depth": 4
}, {
  "id": "前缀索引",
  "text": "前缀索引",
  "depth": 4
}, {
  "id": "单列索引联合索引",
  "text": "单列索引&联合索引",
  "depth": 4
}, {
  "id": "注意事项-8",
  "text": "注意事项",
  "depth": 5
}, {
  "id": "设计原则",
  "text": "设计原则",
  "depth": 3
}, {
  "id": "sql-优化",
  "text": "SQL 优化",
  "depth": 2
}, {
  "id": "插入数据",
  "text": "插入数据",
  "depth": 3
}, {
  "id": "主键优化",
  "text": "主键优化",
  "depth": 3
}, {
  "id": "order-by优化",
  "text": "order by优化",
  "depth": 3
}, {
  "id": "group-by优化",
  "text": "group by优化",
  "depth": 3
}, {
  "id": "limit优化",
  "text": "limit优化",
  "depth": 3
}, {
  "id": "count优化",
  "text": "count优化",
  "depth": 3
}, {
  "id": "update优化避免行锁升级为表锁",
  "text": "update优化（避免行锁升级为表锁）",
  "depth": 3
}, {
  "id": "数据类型",
  "text": "数据类型",
  "depth": 1
}, {
  "id": "整型",
  "text": "整型",
  "depth": 2
}, {
  "id": "浮点型",
  "text": "浮点型",
  "depth": 2
}, {
  "id": "日期和时间",
  "text": "日期和时间",
  "depth": 2
}, {
  "id": "字符串",
  "text": "字符串",
  "depth": 2
}, {
  "id": "二进制类型",
  "text": "二进制类型",
  "depth": 2
}, {
  "id": "权限一览表",
  "text": "权限一览表",
  "depth": 1
}, {
  "id": "图形化界面工具",
  "text": "图形化界面工具",
  "depth": 1
}, {
  "id": "安装",
  "text": "安装",
  "depth": 1
}, {
  "id": "小技巧",
  "text": "小技巧",
  "depth": 1
}, {
  "id": "后续内容",
  "text": "后续内容",
  "depth": 1
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    code: "code",
    div: "div",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsxs(_components.h1, {
      id: "基础篇",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#基础篇",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "基础篇"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "通用语法及分类",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#通用语法及分类",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "通用语法及分类"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "DDL: 数据定义语言，用来定义数据库对象（数据库、表、字段）"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "DML: 数据操作语言，用来对数据库表中的数据进行增删改"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "DQL: 数据查询语言，用来查询数据库中表的记录"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "DCL: 数据控制语言，用来创建数据库用户、控制数据库的控制权限"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "ddl数据定义语言",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#ddl数据定义语言",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "DDL（数据定义语言）"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "数据定义语言"
    }), "\n", jsxRuntimeExports.jsxs(_components.h4, {
      id: "数据库操作",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#数据库操作",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "数据库操作"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["查询所有数据库：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "SHOW DATABASES;"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n查询当前数据库：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "SELECT DATABASE();"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n创建数据库：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "CREATE DATABASE [ IF NOT EXISTS ] 数据库名 [ DEFAULT CHARSET 字符集] [COLLATE 排序规则 ];"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n删除数据库：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "DROP DATABASE [ IF EXISTS ] 数据库名;"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n使用数据库：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "USE 数据库名;"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h5, {
      id: "注意事项",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#注意事项",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "注意事项"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "UTF8字符集长度为3字节，有些符号占4字节，所以推荐用utf8mb4字符集"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h4, {
      id: "表操作",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#表操作",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "表操作"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["查询当前数据库所有表：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "SHOW TABLES;"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n查询表结构：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "DESC 表名;"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n查询指定表的建表语句：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "SHOW CREATE TABLE 表名;"
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "创建表："
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-mysql",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "mysql"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "CREATE"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "TABLE"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "表名"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "	"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "字段1"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "字段1类型"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ["
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "COMMENT"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "字段1注释"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "]"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "	"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "字段2"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "字段2类型"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ["
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "COMMENT"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "字段2注释"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "]"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "	"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "字段3"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "字段3类型"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ["
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "COMMENT"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "字段3注释"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "]"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "	"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "..."
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "	"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "字段n"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "字段n类型"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ["
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "COMMENT"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "字段n注释"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "]"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")[ "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "COMMENT"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "表注释"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ]"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.strong, {
        children: "最后一个字段后面没有逗号"
      })
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["添加字段：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "ALTER TABLE 表名 ADD 字段名 类型(长度) [COMMENT 注释] [约束];"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n例：", jsxRuntimeExports.jsx(_components.code, {
        children: "ALTER TABLE emp ADD nickname varchar(20) COMMENT '昵称';"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["修改数据类型：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "ALTER TABLE 表名 MODIFY 字段名 新数据类型(长度);"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n修改字段名和字段类型：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "ALTER TABLE 表名 CHANGE 旧字段名 新字段名 类型(长度) [COMMENT 注释] [约束];"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n例：将emp表的nickname字段修改为username，类型为varchar(30)", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "ALTER TABLE emp CHANGE nickname username varchar(30) COMMENT '昵称';"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["删除字段：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "ALTER TABLE 表名 DROP 字段名;"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["修改表名：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "ALTER TABLE 表名 RENAME TO 新表名"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["删除表：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "DROP TABLE [IF EXISTS] 表名;"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n删除表，并重新创建该表：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "TRUNCATE TABLE 表名;"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "dml数据操作语言",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#dml数据操作语言",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "DML（数据操作语言）"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h4, {
      id: "添加数据",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#添加数据",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "添加数据"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["指定字段：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "INSERT INTO 表名 (字段名1, 字段名2, ...) VALUES (值1, 值2, ...);"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n全部字段：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "INSERT INTO 表名 VALUES (值1, 值2, ...);"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["批量添加数据：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "INSERT INTO 表名 (字段名1, 字段名2, ...) VALUES (值1, 值2, ...), (值1, 值2, ...), (值1, 值2, ...);"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "INSERT INTO 表名 VALUES (值1, 值2, ...), (值1, 值2, ...), (值1, 值2, ...);"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h5, {
      id: "注意事项-1",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#注意事项-1",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "注意事项"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "字符串和日期类型数据应该包含在引号中"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "插入的数据大小应该在字段的规定范围内"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h4, {
      id: "更新和删除数据",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#更新和删除数据",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "更新和删除数据"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["修改数据：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "UPDATE 表名 SET 字段名1 = 值1, 字段名2 = 值2, ... [ WHERE 条件 ];"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n例：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "UPDATE emp SET name = 'Jack' WHERE id = 1;"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["删除数据：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "DELETE FROM 表名 [ WHERE 条件 ];"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "dql数据查询语言",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#dql数据查询语言",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "DQL（数据查询语言）"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "语法："
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-mysql",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "mysql"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "SELECT"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "	"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "字段列表"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "FROM"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "	"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "表名字段"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "WHERE"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "	"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "条件列表"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "GROUP"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "BY"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "	"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "分组字段列表"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "HAVING"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "	"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "分组后的条件列表"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "ORDER"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "BY"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "	"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "排序字段列表"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "LIMIT"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "	"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "分页参数"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h4, {
      id: "基础查询",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#基础查询",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "基础查询"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["查询多个字段：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "SELECT 字段1, 字段2, 字段3, ... FROM 表名;"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "SELECT * FROM 表名;"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["设置别名：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "SELECT 字段1 [ AS 别名1 ], 字段2 [ AS 别名2 ], 字段3 [ AS 别名3 ], ... FROM 表名;"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "SELECT 字段1 [ 别名1 ], 字段2 [ 别名2 ], 字段3 [ 别名3 ], ... FROM 表名;"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["去除重复记录：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "SELECT DISTINCT 字段列表 FROM 表名;"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["转义：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "SELECT * FROM 表名 WHERE name LIKE '/_张三' ESCAPE '/'"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n/ 之后的_不作为通配符"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h4, {
      id: "条件查询",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#条件查询",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "条件查询"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["语法：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "SELECT 字段列表 FROM 表名 WHERE 条件列表;"
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "条件："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", jsxRuntimeExports.jsxs(_components.table, {
      children: [jsxRuntimeExports.jsx(_components.thead, {
        children: jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.th, {
            children: "比较运算符"
          }), jsxRuntimeExports.jsx(_components.th, {
            children: "功能"
          })]
        })
      }), jsxRuntimeExports.jsxs(_components.tbody, {
        children: [jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: ">"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "大于"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: ">="
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "大于等于"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "<"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "小于"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "<="
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "小于等于"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "="
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "等于"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "<> 或 !="
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "不等于"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "BETWEEN ... AND ..."
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "在某个范围内（含最小、最大值）"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "IN(...)"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "在in之后的列表中的值，多选一"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "LIKE 占位符"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "模糊匹配（_匹配单个字符，%匹配任意个字符）"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "IS NULL"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "是NULL"
          })]
        })]
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", jsxRuntimeExports.jsxs(_components.table, {
      children: [jsxRuntimeExports.jsx(_components.thead, {
        children: jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.th, {
            children: "逻辑运算符"
          }), jsxRuntimeExports.jsx(_components.th, {
            children: "功能"
          })]
        })
      }), jsxRuntimeExports.jsxs(_components.tbody, {
        children: [jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "AND 或 &&"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "并且（多个条件同时成立）"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "OR 或 ||"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "或者（多个条件任意一个成立）"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "NOT 或 !"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "非，不是"
          })]
        })]
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "例子："
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-mysql",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "mysql"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "年龄等于30"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "age"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "30"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "年龄小于30"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "age"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "30"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "小于等于"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "age"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "30"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "没有身份证"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "idcard"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "is"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "null"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "or"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "idcard"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "''"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "有身份证"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "idcard"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "idcard"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "is"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "not"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "null;"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "不等于"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "age"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "!="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "30"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "年龄在20到30之间"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "age"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "between"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "20"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "and"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "30"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "age"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "20"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "and"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "age"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "30"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "下面语句不报错"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "，"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "但查不到任何信息"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "age"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "between"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "30"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "and"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "20"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "性别为女且年龄小于30"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "age"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "30"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "and"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "gender"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "女"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "年龄等于25或30或35"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "age"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "25"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "or"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "age"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "30"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "or"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "age"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "35"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "age"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "in"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "25"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "30"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "35"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "姓名为两个字"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "like"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "__"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "身份证最后为X"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "idcard"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "like"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "%X"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h4, {
      id: "聚合查询聚合函数",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#聚合查询聚合函数",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "聚合查询（聚合函数）"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "常见聚合函数："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", jsxRuntimeExports.jsxs(_components.table, {
      children: [jsxRuntimeExports.jsx(_components.thead, {
        children: jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.th, {
            children: "函数"
          }), jsxRuntimeExports.jsx(_components.th, {
            children: "功能"
          })]
        })
      }), jsxRuntimeExports.jsxs(_components.tbody, {
        children: [jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "count"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "统计数量"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "max"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "最大值"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "min"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "最小值"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "avg"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "平均值"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "sum"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "求和"
          })]
        })]
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["语法：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "SELECT 聚合函数(字段列表) FROM 表名;"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n例：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: 'SELECT count(id) from employee where workaddress = "广东省";'
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h4, {
      id: "分组查询",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#分组查询",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "分组查询"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["语法：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "SELECT 字段列表 FROM 表名 [ WHERE 条件 ] GROUP BY 分组字段名 [ HAVING 分组后的过滤条件 ];"
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "where 和 having 的区别："
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "执行时机不同：where是分组之前进行过滤，不满足where条件不参与分组；having是分组后对结果进行过滤。"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "判断条件不同：where不能对聚合函数进行判断，而having可以。"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "例子："
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-mysql",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "mysql"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "根据性别分组"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "，"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "统计男性和女性数量"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "（"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "只显示分组数量"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "，"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "不显示哪个是男哪个是女"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "）"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "count"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "group"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "by"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "gender"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "根据性别分组"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "，"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "统计男性和女性数量"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "gender"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "count"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "group"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "by"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "gender"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "根据性别分组"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "，"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "统计男性和女性的平均年龄"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "gender"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "avg"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "age"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "group"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "by"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "gender"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "年龄小于45"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "，"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "并根据工作地址分组"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "workaddress"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "count"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "age"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "45"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "group"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "by"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "workaddress"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "年龄小于45"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "，"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "并根据工作地址分组"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "，"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "获取员工数量大于等于3的工作地址"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "workaddress"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "count"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "address_count"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "age"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "45"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "group"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "by"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "workaddress"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "having"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "address_count"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "3"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h5, {
      id: "注意事项-2",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#注意事项-2",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "注意事项"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "执行顺序：where > 聚合函数 > having"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "分组之后，查询的字段一般为聚合函数和分组字段，查询其他字段无任何意义"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h4, {
      id: "排序查询",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#排序查询",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "排序查询"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["语法：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "SELECT 字段列表 FROM 表名 ORDER BY 字段1 排序方式1, 字段2 排序方式2;"
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "排序方式："
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "ASC: 升序（默认）"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "DESC: 降序"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "例子："
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-mysql",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "mysql"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "根据年龄升序排序"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "SELECT"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "FROM"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "ORDER"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "BY"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "age"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "ASC"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "SELECT"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "FROM"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "ORDER"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "BY"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "age"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "两字段排序"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "，"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "根据年龄升序排序"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "，"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "入职时间降序排序"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "SELECT"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "FROM"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "ORDER"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "BY"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "age"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "ASC"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "entrydate"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "DESC"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h5, {
      id: "注意事项-3",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#注意事项-3",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "注意事项"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "如果是多字段排序，当第一个字段值相同时，才会根据第二个字段进行排序"
    }), "\n", jsxRuntimeExports.jsxs(_components.h4, {
      id: "分页查询",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#分页查询",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "分页查询"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["语法：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "SELECT 字段列表 FROM 表名 LIMIT 起始索引, 查询记录数;"
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "例子："
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-mysql",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "mysql"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "查询第一页数据"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "，"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "展示10条"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "SELECT"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "FROM"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "LIMIT"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "0"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "10"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "查询第二页"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "SELECT"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "FROM"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "LIMIT"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "10"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "10"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h5, {
      id: "注意事项-4",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#注意事项-4",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "注意事项"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "起始索引从0开始，起始索引 = （查询页码 - 1） * 每页显示记录数"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "分页查询是数据库的方言，不同数据库有不同实现，MySQL是LIMIT"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "如果查询的是第一页数据，起始索引可以省略，直接简写 LIMIT 10"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h4, {
      id: "dql执行顺序",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#dql执行顺序",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "DQL执行顺序"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "FROM -> WHERE -> GROUP BY -> SELECT -> ORDER BY -> LIMIT"
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "dcl",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#dcl",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "DCL"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h4, {
      id: "管理用户",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#管理用户",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "管理用户"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "查询用户："
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-mysql",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "mysql"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "USE"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "mysql"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "SELECT"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "FROM"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "user"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["创建用户:", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "CREATE USER '用户名'@'主机名' IDENTIFIED BY '密码';"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["修改用户密码：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "ALTER USER '用户名'@'主机名' IDENTIFIED WITH mysql_native_password BY '新密码';"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["删除用户：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "DROP USER '用户名'@'主机名';"
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "例子："
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-mysql",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "mysql"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "创建用户test"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "，"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "只能在当前主机localhost访问"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "create"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "user"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "test"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D08770"
              },
              children: "@"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "localhost"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "identified"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "by"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "123456"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "创建用户test"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "，"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "能在任意主机访问"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "create"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "user"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "test"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D08770"
              },
              children: "@"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "%"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "identified"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "by"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "123456"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "create"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "user"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "test"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "identified"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "by"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "123456"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "修改密码"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "alter"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "user"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "test"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D08770"
              },
              children: "@"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "localhost"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "identified"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "with"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "mysql_native_password"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "by"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "1234"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "删除用户"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "drop"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "user"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "test"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D08770"
              },
              children: "@"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "localhost"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h5, {
      id: "注意事项-5",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#注意事项-5",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "注意事项"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "主机名可以使用 % 通配"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h4, {
      id: "权限控制",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#权限控制",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "权限控制"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "常用权限："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", jsxRuntimeExports.jsxs(_components.table, {
      children: [jsxRuntimeExports.jsx(_components.thead, {
        children: jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.th, {
            children: "权限"
          }), jsxRuntimeExports.jsx(_components.th, {
            children: "说明"
          })]
        })
      }), jsxRuntimeExports.jsxs(_components.tbody, {
        children: [jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "ALL, ALL PRIVILEGES"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "所有权限"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "SELECT"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "查询数据"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "INSERT"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "插入数据"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "UPDATE"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "修改数据"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "DELETE"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "删除数据"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "ALTER"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "修改表"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "DROP"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "删除数据库/表/视图"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "CREATE"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "创建数据库/表"
          })]
        })]
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["更多权限请看", jsxRuntimeExports.jsx(_components.a, {
        href: "#%E6%9D%83%E9%99%90%E4%B8%80%E8%A7%88%E8%A1%A8",
        title: "权限一览表",
        children: "权限一览表"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["查询权限：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "SHOW GRANTS FOR '用户名'@'主机名';"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["授予权限：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "GRANT 权限列表 ON 数据库名.表名 TO '用户名'@'主机名';"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["撤销权限：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "REVOKE 权限列表 ON 数据库名.表名 FROM '用户名'@'主机名';"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h5, {
      id: "注意事项-6",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#注意事项-6",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "注意事项"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "多个权限用逗号分隔"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "授权时，数据库名和表名可以用 * 进行通配，代表所有"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "函数",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#函数",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "函数"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "字符串函数"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "数值函数"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "日期函数"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "流程函数"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "字符串函数",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#字符串函数",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "字符串函数"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "常用函数："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", jsxRuntimeExports.jsxs(_components.table, {
      children: [jsxRuntimeExports.jsx(_components.thead, {
        children: jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.th, {
            children: "函数"
          }), jsxRuntimeExports.jsx(_components.th, {
            children: "功能"
          })]
        })
      }), jsxRuntimeExports.jsxs(_components.tbody, {
        children: [jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "CONCAT(s1, s2, ..., sn)"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "字符串拼接，将s1, s2, ..., sn拼接成一个字符串"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "LOWER(str)"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "将字符串全部转为小写"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "UPPER(str)"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "将字符串全部转为大写"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "LPAD(str, n, pad)"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "左填充，用字符串pad对str的左边进行填充，达到n个字符串长度"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "RPAD(str, n, pad)"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "右填充，用字符串pad对str的右边进行填充，达到n个字符串长度"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "TRIM(str)"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "去掉字符串头部和尾部的空格"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "SUBSTRING(str, start, len)"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "返回从字符串str从start位置起的len个长度的字符串"
          })]
        })]
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "使用示例："
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-mysql",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "mysql"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "拼接"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "SELECT"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "CONCAT"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Hello"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "World"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "小写"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "SELECT"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "LOWER"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Hello"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "大写"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "SELECT"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "UPPER"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Hello"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "左填充"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "SELECT"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "LPAD"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "01"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "5"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "-"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "右填充"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "SELECT"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "RPAD"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "01"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "5"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "-"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "去除空格"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "SELECT"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "TRIM"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: " Hello World "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "切片"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "（"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "起始索引为1"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "）"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "SELECT"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "SUBSTRING"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Hello World"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "1"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "5"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "数值函数",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#数值函数",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "数值函数"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "常见函数："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", jsxRuntimeExports.jsxs(_components.table, {
      children: [jsxRuntimeExports.jsx(_components.thead, {
        children: jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.th, {
            children: "函数"
          }), jsxRuntimeExports.jsx(_components.th, {
            children: "功能"
          })]
        })
      }), jsxRuntimeExports.jsxs(_components.tbody, {
        children: [jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "CEIL(x)"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "向上取整"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "FLOOR(x)"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "向下取整"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "MOD(x, y)"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "返回x/y的模"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "RAND()"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "返回0~1内的随机数"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "ROUND(x, y)"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "求参数x的四舍五入值，保留y位小数"
          })]
        })]
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "日期函数",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#日期函数",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "日期函数"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "常用函数："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", jsxRuntimeExports.jsxs(_components.table, {
      children: [jsxRuntimeExports.jsx(_components.thead, {
        children: jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.th, {
            children: "函数"
          }), jsxRuntimeExports.jsx(_components.th, {
            children: "功能"
          })]
        })
      }), jsxRuntimeExports.jsxs(_components.tbody, {
        children: [jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "CURDATE()"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "返回当前日期"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "CURTIME()"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "返回当前时间"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "NOW()"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "返回当前日期和时间"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "YEAR(date)"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "获取指定date的年份"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "MONTH(date)"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "获取指定date的月份"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "DAY(date)"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "获取指定date的日期"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "DATE_ADD(date, INTERVAL expr type)"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "返回一个日期/时间值加上一个时间间隔expr后的时间值"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "DATEDIFF(date1, date2)"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "返回起始时间date1和结束时间date2之间的天数"
          })]
        })]
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "例子："
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-mysql",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "mysql"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "DATE_ADD"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "SELECT"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "DATE_ADD"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "NOW"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "()"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "INTERVAL"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "70"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "YEAR"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "流程函数",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#流程函数",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "流程函数"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "常用函数："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", jsxRuntimeExports.jsxs(_components.table, {
      children: [jsxRuntimeExports.jsx(_components.thead, {
        children: jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.th, {
            children: "函数"
          }), jsxRuntimeExports.jsx(_components.th, {
            children: "功能"
          })]
        })
      }), jsxRuntimeExports.jsxs(_components.tbody, {
        children: [jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "IF(value, t, f)"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "如果value为true，则返回t，否则返回f"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "IFNULL(value1, value2)"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "如果value1不为空，返回value1，否则返回value2"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "CASE WHEN [ val1 ] THEN [ res1 ] ... ELSE [ default ] END"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "如果val1为true，返回res1，... 否则返回default默认值"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "CASE [ expr ] WHEN [ val1 ] THEN [ res1 ] ... ELSE [ default ] END"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "如果expr的值等于val1，返回res1，... 否则返回default默认值"
          })]
        })]
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "例子："
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-mysql",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "mysql"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "	"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "	("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "case"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "when"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "age"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "30"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "then"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "中年"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "else"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "青年"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "end"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "	"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "	("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "case"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "workaddress"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "when"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "北京市"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "then"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "一线城市"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "when"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "上海市"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "then"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "一线城市"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "else"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "二线城市"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "end"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "as"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "工作地址"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "约束",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#约束",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "约束"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "分类："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", jsxRuntimeExports.jsxs(_components.table, {
      children: [jsxRuntimeExports.jsx(_components.thead, {
        children: jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.th, {
            children: "约束"
          }), jsxRuntimeExports.jsx(_components.th, {
            children: "描述"
          }), jsxRuntimeExports.jsx(_components.th, {
            children: "关键字"
          })]
        })
      }), jsxRuntimeExports.jsxs(_components.tbody, {
        children: [jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "非空约束"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "限制该字段的数据不能为null"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "NOT NULL"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "唯一约束"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "保证该字段的所有数据都是唯一、不重复的"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "UNIQUE"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "主键约束"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "主键是一行数据的唯一标识，要求非空且唯一"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "PRIMARY KEY"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "默认约束"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "保存数据时，如果未指定该字段的值，则采用默认值"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "DEFAULT"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "检查约束（8.0.1版本后）"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "保证字段值满足某一个条件"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "CHECK"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "外键约束"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "用来让两张图的数据之间建立连接，保证数据的一致性和完整性"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "FOREIGN KEY"
          })]
        })]
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "约束是作用于表中字段上的，可以再创建表/修改表的时候添加约束。"
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "常用约束",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#常用约束",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "常用约束"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", jsxRuntimeExports.jsxs(_components.table, {
      children: [jsxRuntimeExports.jsx(_components.thead, {
        children: jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.th, {
            children: "约束条件"
          }), jsxRuntimeExports.jsx(_components.th, {
            children: "关键字"
          })]
        })
      }), jsxRuntimeExports.jsxs(_components.tbody, {
        children: [jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "主键"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "PRIMARY KEY"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "自动增长"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "AUTO_INCREMENT"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "不为空"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "NOT NULL"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "唯一"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "UNIQUE"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "逻辑条件"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "CHECK"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "默认值"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "DEFAULT"
          })]
        })]
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "例子："
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-mysql",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "mysql"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "create"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "table"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "user"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "	"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "id"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "int"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "primary"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "key"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "auto_increment"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "	"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "varchar"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "10"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "not"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "null"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "unique"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "	"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "age"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "int"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "check"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "age"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "0"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "and"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "age"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "120"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "	"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "status"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "char"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "1"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "default"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "1"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "	"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "gender"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "char"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "1"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "外键约束",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#外键约束",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "外键约束"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "添加外键："
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-mysql",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "mysql"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "CREATE"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "TABLE"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "表名"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "	"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "字段名"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "字段类型"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "	"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "..."
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "	["
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "CONSTRAINT"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "] ["
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "外键名称"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "] "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "FOREIGN"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "KEY"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "外键字段名"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "REFERENCES"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "主表"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "主表列名"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "ALTER"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "TABLE"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "表名"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "ADD"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "CONSTRAINT"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "外键名称"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "FOREIGN"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "KEY"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "外键字段名"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "REFERENCES"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "主表"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "主表列名"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "例子"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "alter"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "table"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "emp"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "add"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "constraint"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "fk_emp_dept_id"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "foreign"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "key"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "dept_id"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "references"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "dept"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "id"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["删除外键：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "ALTER TABLE 表名 DROP FOREIGN KEY 外键名;"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h4, {
      id: "删除更新行为",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#删除更新行为",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "删除/更新行为"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", jsxRuntimeExports.jsxs(_components.table, {
      children: [jsxRuntimeExports.jsx(_components.thead, {
        children: jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.th, {
            children: "行为"
          }), jsxRuntimeExports.jsx(_components.th, {
            children: "说明"
          })]
        })
      }), jsxRuntimeExports.jsxs(_components.tbody, {
        children: [jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "NO ACTION"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "当在父表中删除/更新对应记录时，首先检查该记录是否有对应外键，如果有则不允许删除/更新（与RESTRICT一致）"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "RESTRICT"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "当在父表中删除/更新对应记录时，首先检查该记录是否有对应外键，如果有则不允许删除/更新（与NO ACTION一致）"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "CASCADE"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "当在父表中删除/更新对应记录时，首先检查该记录是否有对应外键，如果有则也删除/更新外键在子表中的记录"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "SET NULL"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "当在父表中删除/更新对应记录时，首先检查该记录是否有对应外键，如果有则设置子表中该外键值为null（要求该外键允许为null）"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "SET DEFAULT"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "父表有变更时，子表将外键设为一个默认值（Innodb不支持）"
          })]
        })]
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["更改删除/更新行为：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "ALTER TABLE 表名 ADD CONSTRAINT 外键名称 FOREIGN KEY (外键字段) REFERENCES 主表名(主表字段名) ON UPDATE 行为 ON DELETE 行为;"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "多表查询",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#多表查询",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "多表查询"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "多表关系",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#多表关系",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "多表关系"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "一对多（多对一）"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "多对多"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "一对一"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h4, {
      id: "一对多",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#一对多",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "一对多"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["案例：部门与员工", jsxRuntimeExports.jsx(_components.br, {}), "\n关系：一个部门对应多个员工，一个员工对应一个部门", jsxRuntimeExports.jsx(_components.br, {}), "\n实现：在多的一方建立外键，指向一的一方的主键"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h4, {
      id: "多对多",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#多对多",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "多对多"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["案例：学生与课程", jsxRuntimeExports.jsx(_components.br, {}), "\n关系：一个学生可以选多门课程，一门课程也可以供多个学生选修", jsxRuntimeExports.jsx(_components.br, {}), "\n实现：建立第三张中间表，中间表至少包含两个外键，分别关联两方主键"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h4, {
      id: "一对一",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#一对一",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "一对一"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["案例：用户与用户详情", jsxRuntimeExports.jsx(_components.br, {}), "\n关系：一对一关系，多用于单表拆分，将一张表的基础字段放在一张表中，其他详情字段放在另一张表中，以提升操作效率", jsxRuntimeExports.jsx(_components.br, {}), "\n实现：在任意一方加入外键，关联另外一方的主键，并且设置外键为唯一的（UNIQUE）"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "查询",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#查询",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "查询"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["合并查询（笛卡尔积，会展示所有组合结果）：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "select * from employee, dept;"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.blockquote, {
      children: ["\n", jsxRuntimeExports.jsx(_components.p, {
        children: "笛卡尔积：两个集合A集合和B集合的所有组合情况（在多表查询时，需要消除无效的笛卡尔积）"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["消除无效笛卡尔积：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "select * from employee, dept where employee.dept = dept.id;"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "内连接查询",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#内连接查询",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "内连接查询"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "内连接查询的是两张表交集的部分"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["隐式内连接：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "SELECT 字段列表 FROM 表1, 表2 WHERE 条件 ...;"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["显式内连接：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "SELECT 字段列表 FROM 表1 [ INNER ] JOIN 表2 ON 连接条件 ...;"
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "显式性能比隐式高"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "例子："
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-mysql",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "mysql"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "查询员工姓名"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "，"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "及关联的部门的名称"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "隐式"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "e"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "d"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "as"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " e"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "dept"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "as"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " d where e"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "dept = d"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "id"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "显式"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "e"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "d"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "as"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " e inner join dept "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "as"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " d on e"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "dept = d"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "id"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "外连接查询",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#外连接查询",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "外连接查询"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["左外连接：", jsxRuntimeExports.jsx(_components.br, {}), "\n查询左表所有数据，以及两张表交集部分数据", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "SELECT 字段列表 FROM 表1 LEFT [ OUTER ] JOIN 表2 ON 条件 ...;"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n相当于查询表1的所有数据，包含表1和表2交集部分数据"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["右外连接：", jsxRuntimeExports.jsx(_components.br, {}), "\n查询右表所有数据，以及两张表交集部分数据", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "SELECT 字段列表 FROM 表1 RIGHT [ OUTER ] JOIN 表2 ON 条件 ...;"
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "例子："
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-mysql",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "mysql"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "左"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "e"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "d"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "as"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " e left outer join dept "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "as"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " d on e"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "dept = d"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "id"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "d"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "e"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "dept"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "d"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "left"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "outer"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "join"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "emp"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "e"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "on"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "e"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "dept"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "d"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "id"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "这条语句与下面的语句效果一样"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "右"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "d"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "e"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "as"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " e right outer join dept "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "as"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " d on e"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "dept = d"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "id"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "左连接可以查询到没有dept的employee，右连接可以查询到没有employee的dept"
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "自连接查询",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#自连接查询",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "自连接查询"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "当前表与自身的连接查询，自连接必须使用表别名"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["语法：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "SELECT 字段列表 FROM 表A 别名A JOIN 表A 别名B ON 条件 ...;"
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "自连接查询，可以是内连接查询，也可以是外连接查询"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "例子："
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-mysql",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "mysql"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "查询员工及其所属领导的名字"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "a"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "b"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "a"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "b"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "a"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "manager"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "b"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "id"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "没有领导的也查询出来"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "a"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "b"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "a"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "left"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "join"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "b"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "on"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "a"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "manager"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "b"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "id"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "联合查询-union-union-all",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#联合查询-union-union-all",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "联合查询 union, union all"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "把多次查询的结果合并，形成一个新的查询集"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "语法："
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-mysql",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "mysql"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "SELECT"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "字段列表"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "FROM"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "表A"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "..."
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "UNION"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ["
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "ALL"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "]"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "SELECT"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "字段列表"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "FROM"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "表B"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "..."
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h4, {
      id: "注意事项-7",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#注意事项-7",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "注意事项"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "UNION ALL 会有重复结果，UNION 不会"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "联合查询比使用or效率高，不会使索引失效"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "子查询",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#子查询",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "子查询"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["SQL语句中嵌套SELECT语句，称谓嵌套查询，又称子查询。", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "SELECT * FROM t1 WHERE column1 = ( SELECT column1 FROM t2);"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "子查询外部的语句可以是 INSERT / UPDATE / DELETE / SELECT 的任何一个"
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "根据子查询结果可以分为："
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "标量子查询（子查询结果为单个值）"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "列子查询（子查询结果为一列）"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "行子查询（子查询结果为一行）"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "表子查询（子查询结果为多行多列）"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "根据子查询位置可分为："
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "WHERE 之后"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "FROM 之后"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "SELECT 之后"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h4, {
      id: "标量子查询",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#标量子查询",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "标量子查询"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["子查询返回的结果是单个值（数字、字符串、日期等）。", jsxRuntimeExports.jsx(_components.br, {}), "\n常用操作符：- < > > >= < <="]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "例子："
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-mysql",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "mysql"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "查询销售部所有员工"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "id"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "dept"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "销售部"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "根据销售部部门ID"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "，"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "查询员工信息"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "dept"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "4"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "合并"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "（"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "子查询"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "）"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "dept"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "id"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "dept"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "销售部"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "查询xxx入职之后的员工信息"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "entrydate"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "entrydate"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "xxx"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h4, {
      id: "列子查询",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#列子查询",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "列子查询"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "返回的结果是一列（可以是多行）。"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "常用操作符："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", jsxRuntimeExports.jsxs(_components.table, {
      children: [jsxRuntimeExports.jsx(_components.thead, {
        children: jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.th, {
            children: "操作符"
          }), jsxRuntimeExports.jsx(_components.th, {
            children: "描述"
          })]
        })
      }), jsxRuntimeExports.jsxs(_components.tbody, {
        children: [jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "IN"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "在指定的集合范围内，多选一"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "NOT IN"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "不在指定的集合范围内"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "ANY"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "子查询返回列表中，有任意一个满足即可"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "SOME"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "与ANY等同，使用SOME的地方都可以使用ANY"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "ALL"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "子查询返回列表的所有值都必须满足"
          })]
        })]
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "例子："
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-mysql",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "mysql"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "查询销售部和市场部的所有员工信息"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "dept"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "in"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "id"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "dept"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "销售部"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "or"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "市场部"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "查询比财务部所有人工资都高的员工信息"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "salary"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "all"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "salary"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "dept"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "id"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "dept"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "财务部"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "))"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "查询比研发部任意一人工资高的员工信息"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "salary"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "any"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "salary"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "dept"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "id"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "dept"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "研发部"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "))"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h4, {
      id: "行子查询",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#行子查询",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "行子查询"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["返回的结果是一行（可以是多列）。", jsxRuntimeExports.jsx(_components.br, {}), "\n常用操作符：=, <, >, IN, NOT IN"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "例子："
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-mysql",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "mysql"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "查询与xxx的薪资及直属领导相同的员工信息"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "salary"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "manager"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "12500"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "1"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "salary"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "manager"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "salary"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "manager"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "xxx"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h4, {
      id: "表子查询",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#表子查询",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "表子查询"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["返回的结果是多行多列", jsxRuntimeExports.jsx(_components.br, {}), "\n常用操作符：IN"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "例子："
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-mysql",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "mysql"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "查询与xxx1"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "，"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "xxx2的职位和薪资相同的员工"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "job"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "salary"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "in"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "job"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "salary"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "xxx1"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "or"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "xxx2"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "查询入职日期是2006"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "01"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "01"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "之后的员工"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "，"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "及其部门信息"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "e"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "d"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "employee"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "entrydate"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "2006-01-01"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "as"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " e left join dept "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "as"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " d on e"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "dept = d"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "id"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "事务",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#事务",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "事务"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "事务是一组操作的集合，事务会把所有操作作为一个整体一起向系统提交或撤销操作请求，即这些操作要么同时成功，要么同时失败。"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "基本操作："
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-mysql",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "mysql"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "1."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "查询张三账户余额"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "account"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "张三"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "2."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "将张三账户余额"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "1000"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "update"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "account"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "set"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "money"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "money"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "1000"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "张三"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "此语句出错后张三钱减少但是李四钱没有增加"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "模拟sql语句错误"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "3."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "将李四账户余额"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "+"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "1000"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "update"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "account"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "set"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "money"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "money"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "+"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "1000"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "李四"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "查看事务提交方式"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "SELECT"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D08770"
              },
              children: "@"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "@"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "AUTOCOMMIT"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "设置事务提交方式"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "，1"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "为自动提交"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "，0"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "为手动提交"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "，"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "该设置只对当前会话有效"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "SET"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D08770"
              },
              children: "@"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "@"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "AUTOCOMMIT"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "0"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "提交事务"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "COMMIT"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "回滚事务"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "ROLLBACK"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "设置手动提交后上面代码改为"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "："
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "account"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "张三"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "update"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "account"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "set"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "money"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "money"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "1000"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "张三"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "update"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "account"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "set"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "money"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "money"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "+"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "1000"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "李四"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "commit"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "操作方式二："
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["开启事务：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "START TRANSACTION 或 BEGIN TRANSACTION;"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n提交事务：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "COMMIT;"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n回滚事务：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "ROLLBACK;"
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "操作实例："
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-mysql",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "mysql"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "start"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "transaction"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "account"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "张三"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "update"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "account"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "set"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "money"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "money"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "1000"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "张三"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "update"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "account"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "set"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "money"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "money"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "+"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "1000"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "李四"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "commit"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "四大特性acid",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#四大特性acid",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "四大特性ACID"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "原子性(Atomicity)：事务是不可分割的最小操作但愿，要么全部成功，要么全部失败"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "一致性(Consistency)：事务完成时，必须使所有数据都保持一致状态"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "隔离性(Isolation)：数据库系统提供的隔离机制，保证事务在不受外部并发操作影响的独立环境下运行"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "持久性(Durability)：事务一旦提交或回滚，它对数据库中的数据的改变就是永久的"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "并发事务",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#并发事务",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "并发事务"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", jsxRuntimeExports.jsxs(_components.table, {
      children: [jsxRuntimeExports.jsx(_components.thead, {
        children: jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.th, {
            children: "问题"
          }), jsxRuntimeExports.jsx(_components.th, {
            children: "描述"
          })]
        })
      }), jsxRuntimeExports.jsxs(_components.tbody, {
        children: [jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "脏读"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "一个事务读到另一个事务还没提交的数据"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "不可重复读"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "一个事务先后读取同一条记录，但两次读取的数据不同"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "幻读"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "一个事务按照条件查询数据时，没有对应的数据行，但是再插入数据时，又发现这行数据已经存在"
          })]
        })]
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.blockquote, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.p, {
        children: ["这三个问题的详细演示：", jsxRuntimeExports.jsx(_components.a, {
          href: "https://www.bilibili.com/video/BV1Kr4y1i7ru?p=55cd",
          children: "https://www.bilibili.com/video/BV1Kr4y1i7ru?p=55cd"
        })]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "并发事务隔离级别："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", jsxRuntimeExports.jsxs(_components.table, {
      children: [jsxRuntimeExports.jsx(_components.thead, {
        children: jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.th, {
            children: "隔离级别"
          }), jsxRuntimeExports.jsx(_components.th, {
            children: "脏读"
          }), jsxRuntimeExports.jsx(_components.th, {
            children: "不可重复读"
          }), jsxRuntimeExports.jsx(_components.th, {
            children: "幻读"
          })]
        })
      }), jsxRuntimeExports.jsxs(_components.tbody, {
        children: [jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "Read uncommitted"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "√"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "√"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "√"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "Read committed"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "×"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "√"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "√"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "Repeatable Read(默认)"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "×"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "×"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "√"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "Serializable"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "×"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "×"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "×"
          })]
        })]
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "√表示在当前隔离级别下该问题会出现"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "Serializable 性能最低；Read uncommitted 性能最高，数据安全性最差"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["查看事务隔离级别：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "SELECT @@TRANSACTION_ISOLATION;"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n设置事务隔离级别：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "SET [ SESSION | GLOBAL ] TRANSACTION ISOLATION LEVEL {READ UNCOMMITTED | READ COMMITTED | REPEATABLE READ | SERIALIZABLE };"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\nSESSION 是会话级别，表示只针对当前会话有效，GLOBAL 表示对所有会话有效"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h1, {
      id: "进阶篇",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#进阶篇",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "进阶篇"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "存储引擎",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#存储引擎",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "存储引擎"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "MySQL体系结构："
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.img, {
        src: "https://dhc.pythonanywhere.com/media/editor/MySQL%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84_20220315034329549927.png",
        alt: "结构图",
        title: "结构图",
        className: "article-img"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.img, {
        src: "https://dhc.pythonanywhere.com/media/editor/MySQL%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84%E5%B1%82%E7%BA%A7%E5%90%AB%E4%B9%89_20220315034359342837.png",
        alt: "层级描述",
        title: "层级描述",
        className: "article-img"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["存储引擎就是存储数据、建立索引、更新/查询数据等技术的实现方式。存储引擎是基于表而不是基于库的，所以存储引擎也可以被称为表引擎。", jsxRuntimeExports.jsx(_components.br, {}), "\n默认存储引擎是InnoDB。"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "相关操作："
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-mysql",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "mysql"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "查询建表语句"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "show"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "create"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "table"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "account"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "建表时指定存储引擎"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "CREATE"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "TABLE"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "表名"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "	"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "..."
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "ENGINE"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "INNODB"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "查看当前数据库支持的存储引擎"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "show"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "engines"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "innodb",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#innodb",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "InnoDB"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "InnoDB 是一种兼顾高可靠性和高性能的通用存储引擎，在 MySQL 5.5 之后，InnoDB 是默认的 MySQL 引擎。"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "特点："
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["DML 操作遵循 ACID 模型，支持", jsxRuntimeExports.jsx(_components.strong, {
          children: "事务"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.strong, {
          children: "行级锁"
        }), "，提高并发访问性能"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["支持", jsxRuntimeExports.jsx(_components.strong, {
          children: "外键"
        }), "约束，保证数据的完整性和正确性"]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "文件："
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "xxx.ibd: xxx代表表名，InnoDB 引擎的每张表都会对应这样一个表空间文件，存储该表的表结构（frm、sdi）、数据和索引。"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "参数：innodb_file_per_table，决定多张表共享一个表空间还是每张表对应一个表空间"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "知识点："
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["查看 Mysql 变量：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "show variables like 'innodb_file_per_table';"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["从idb文件提取表结构数据：", jsxRuntimeExports.jsx(_components.br, {}), "\n（在cmd运行）", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "ibd2sdi xxx.ibd"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["InnoDB 逻辑存储结构：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.img, {
        src: "https://dhc.pythonanywhere.com/media/editor/%E9%80%BB%E8%BE%91%E5%AD%98%E5%82%A8%E7%BB%93%E6%9E%84_20220316030616590001.png",
        alt: "InnoDB逻辑存储结构",
        title: "InnoDB逻辑存储结构",
        className: "article-img"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "myisam",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#myisam",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "MyISAM"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "MyISAM 是 MySQL 早期的默认存储引擎。"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "特点："
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "不支持事务，不支持外键"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "支持表锁，不支持行锁"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "访问速度快"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "文件："
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "xxx.sdi: 存储表结构信息"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "xxx.MYD: 存储数据"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "xxx.MYI: 存储索引"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "memory",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#memory",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "Memory"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Memory 引擎的表数据是存储在内存中的，受硬件问题、断电问题的影响，只能将这些表作为临时表或缓存使用。"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "特点："
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "存放在内存中，速度快"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "hash索引（默认）"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "文件："
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "xxx.sdi: 存储表结构信息"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "存储引擎特点",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#存储引擎特点",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "存储引擎特点"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", jsxRuntimeExports.jsxs(_components.table, {
      children: [jsxRuntimeExports.jsx(_components.thead, {
        children: jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.th, {
            children: "特点"
          }), jsxRuntimeExports.jsx(_components.th, {
            children: "InnoDB"
          }), jsxRuntimeExports.jsx(_components.th, {
            children: "MyISAM"
          }), jsxRuntimeExports.jsx(_components.th, {
            children: "Memory"
          })]
        })
      }), jsxRuntimeExports.jsxs(_components.tbody, {
        children: [jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "存储限制"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "64TB"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "有"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "有"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "事务安全"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "支持"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "-"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "-"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "锁机制"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "行锁"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "表锁"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "表锁"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "B+tree索引"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "支持"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "支持"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "支持"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "Hash索引"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "-"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "-"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "支持"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "全文索引"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "支持（5.6版本之后）"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "支持"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "-"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "空间使用"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "高"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "低"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "N/A"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "内存使用"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "高"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "低"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "中等"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "批量插入速度"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "低"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "高"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "高"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "支持外键"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "支持"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "-"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "-"
          })]
        })]
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "存储引擎的选择",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#存储引擎的选择",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "存储引擎的选择"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "在选择存储引擎时，应该根据应用系统的特点选择合适的存储引擎。对于复杂的应用系统，还可以根据实际情况选择多种存储引擎进行组合。"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "InnoDB: 如果应用对事物的完整性有比较高的要求，在并发条件下要求数据的一致性，数据操作除了插入和查询之外，还包含很多的更新、删除操作，则 InnoDB 是比较合适的选择"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "MyISAM: 如果应用是以读操作和插入操作为主，只有很少的更新和删除操作，并且对事务的完整性、并发性要求不高，那这个存储引擎是非常合适的。"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "Memory: 将所有数据保存在内存中，访问速度快，通常用于临时表及缓存。Memory 的缺陷是对表的大小有限制，太大的表无法缓存在内存中，而且无法保障数据的安全性"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "电商中的足迹和评论适合使用 MyISAM 引擎，缓存适合使用 Memory 引擎。"
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "性能分析",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#性能分析",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "性能分析"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "查看执行频次",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#查看执行频次",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "查看执行频次"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["查看当前数据库的 INSERT, UPDATE, DELETE, SELECT 访问频次：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "SHOW GLOBAL STATUS LIKE 'Com_______';"
      }), " 或者 ", jsxRuntimeExports.jsx(_components.code, {
        children: "SHOW SESSION STATUS LIKE 'Com_______';"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n例：", jsxRuntimeExports.jsx(_components.code, {
        children: "show global status like 'Com_______'"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "慢查询日志",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#慢查询日志",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "慢查询日志"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["慢查询日志记录了所有执行时间超过指定参数（long_query_time，单位：秒，默认10秒）的所有SQL语句的日志。", jsxRuntimeExports.jsx(_components.br, {}), "\nMySQL的慢查询日志默认没有开启，需要在MySQL的配置文件（/etc/my.cnf）中配置如下信息：", jsxRuntimeExports.jsx(_components.br, {}), "\n# 开启慢查询日志开关", jsxRuntimeExports.jsx(_components.br, {}), "\nslow_query_log=1", jsxRuntimeExports.jsx(_components.br, {}), "\n# 设置慢查询日志的时间为2秒，SQL语句执行时间超过2秒，就会视为慢查询，记录慢查询日志", jsxRuntimeExports.jsx(_components.br, {}), "\nlong_query_time=2", jsxRuntimeExports.jsx(_components.br, {}), "\n更改后记得重启MySQL服务，日志文件位置：/var/lib/mysql/localhost-slow.log"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["查看慢查询日志开关状态：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "show variables like 'slow_query_log';"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "profile",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#profile",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "profile"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["show profile 能在做SQL优化时帮我们了解时间都耗费在哪里。通过 have_profiling 参数，能看到当前 MySQL 是否支持 profile 操作：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "SELECT @@have_profiling;"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\nprofiling 默认关闭，可以通过set语句在session/global级别开启 profiling：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "SET profiling = 1;"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n查看所有语句的耗时：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "show profiles;"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n查看指定query_id的SQL语句各个阶段的耗时：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "show profile for query query_id;"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n查看指定query_id的SQL语句CPU的使用情况", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "show profile cpu for query query_id;"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "explain",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#explain",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "explain"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["EXPLAIN 或者 DESC 命令获取 MySQL 如何执行 SELECT 语句的信息，包括在 SELECT 语句执行过程中表如何连接和连接的顺序。", jsxRuntimeExports.jsx(_components.br, {}), "\n语法：", jsxRuntimeExports.jsx(_components.br, {}), "\n# 直接在select语句之前加上关键字 explain / desc", jsxRuntimeExports.jsx(_components.br, {}), "\nEXPLAIN SELECT 字段列表 FROM 表名 HWERE 条件;"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "EXPLAIN 各字段含义："
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "id：select 查询的序列号，表示查询中执行 select 子句或者操作表的顺序（id相同，执行顺序从上到下；id不同，值越大越先执行）"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "select_type：表示 SELECT 的类型，常见取值有 SIMPLE（简单表，即不适用表连接或者子查询）、PRIMARY（主查询，即外层的查询）、UNION（UNION中的第二个或者后面的查询语句）、SUBQUERY（SELECT/WHERE之后包含了子查询）等"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "type：表示连接类型，性能由好到差的连接类型为 NULL、system、const、eq_ref、ref、range、index、all"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "possible_key：可能应用在这张表上的索引，一个或多个"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "Key：实际使用的索引，如果为 NULL，则没有使用索引"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "Key_len：表示索引中使用的字节数，该值为索引字段最大可能长度，并非实际使用长度，在不损失精确性的前提下，长度越短越好"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "rows：MySQL认为必须要执行的行数，在InnoDB引擎的表中，是一个估计值，可能并不总是准确的"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "filtered：表示返回结果的行数占需读取行数的百分比，filtered的值越大越好"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "索引",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#索引",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "索引"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["索引是帮助 MySQL ", jsxRuntimeExports.jsx(_components.strong, {
        children: "高效获取数据"
      }), "的", jsxRuntimeExports.jsx(_components.strong, {
        children: "数据结构（有序）"
      }), "。在数据之外，数据库系统还维护着满足特定查找算法的数据结构，这些数据结构以某种方式引用（指向）数据，这样就可以在这些数据结构上实现高级查询算法，这种数据结构就是索引。"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "优缺点："
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "优点："
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "提高数据检索效率，降低数据库的IO成本"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "通过索引列对数据进行排序，降低数据排序的成本，降低CPU的消耗"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "缺点："
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "索引列也是要占用空间的"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "索引大大提高了查询效率，但降低了更新的速度，比如 INSERT、UPDATE、DELETE"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "索引结构",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#索引结构",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "索引结构"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", jsxRuntimeExports.jsxs(_components.table, {
      children: [jsxRuntimeExports.jsx(_components.thead, {
        children: jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.th, {
            children: "索引结构"
          }), jsxRuntimeExports.jsx(_components.th, {
            children: "描述"
          })]
        })
      }), jsxRuntimeExports.jsxs(_components.tbody, {
        children: [jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "B+Tree"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "最常见的索引类型，大部分引擎都支持B+树索引"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "Hash"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "底层数据结构是用哈希表实现，只有精确匹配索引列的查询才有效，不支持范围查询"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "R-Tree(空间索引)"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "空间索引是 MyISAM 引擎的一个特殊索引类型，主要用于地理空间数据类型，通常使用较少"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "Full-Text(全文索引)"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "是一种通过建立倒排索引，快速匹配文档的方式，类似于 Lucene, Solr, ES"
          })]
        })]
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", jsxRuntimeExports.jsxs(_components.table, {
      children: [jsxRuntimeExports.jsx(_components.thead, {
        children: jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.th, {
            children: "索引"
          }), jsxRuntimeExports.jsx(_components.th, {
            children: "InnoDB"
          }), jsxRuntimeExports.jsx(_components.th, {
            children: "MyISAM"
          }), jsxRuntimeExports.jsx(_components.th, {
            children: "Memory"
          })]
        })
      }), jsxRuntimeExports.jsxs(_components.tbody, {
        children: [jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "B+Tree索引"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "支持"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "支持"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "支持"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "Hash索引"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "不支持"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "不支持"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "支持"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "R-Tree索引"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "不支持"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "支持"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "不支持"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "Full-text"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "5.6版本后支持"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "支持"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "不支持"
          })]
        })]
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h4, {
      id: "b-tree",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#b-tree",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "B-Tree"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.img, {
        src: "https://dhc.pythonanywhere.com/media/editor/%E4%BA%8C%E5%8F%89%E6%A0%91_20220316153214227108.png",
        alt: "二叉树",
        title: "二叉树",
        className: "article-img"
      })
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["二叉树的缺点可以用红黑树来解决：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.img, {
        src: "https://dhc.pythonanywhere.com/media/editor/%E7%BA%A2%E9%BB%91%E6%A0%91_20220316163142686602.png",
        alt: "红黑树",
        title: "红黑树",
        className: "article-img"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n红黑树也存在大数据量情况下，层级较深，检索速度慢的问题。"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["为了解决上述问题，可以使用 B-Tree 结构。", jsxRuntimeExports.jsx(_components.br, {}), "\nB-Tree (多路平衡查找树) 以一棵最大度数（max-degree，指一个节点的子节点个数）为5（5阶）的 b-tree 为例（每个节点最多存储4个key，5个指针）"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.img, {
        src: "https://dhc.pythonanywhere.com/media/editor/B-Tree%E7%BB%93%E6%9E%84_20220316163813441163.png",
        alt: "B-Tree结构",
        title: "B-Tree结构",
        className: "article-img"
      })
    }), "\n", jsxRuntimeExports.jsxs(_components.blockquote, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.p, {
        children: ["B-Tree 的数据插入过程动画参照：", jsxRuntimeExports.jsx(_components.a, {
          href: "https://www.bilibili.com/video/BV1Kr4y1i7ru?p=68",
          children: "https://www.bilibili.com/video/BV1Kr4y1i7ru?p=68"
        }), jsxRuntimeExports.jsx(_components.br, {}), "\n演示地址：", jsxRuntimeExports.jsx(_components.a, {
          href: "https://www.cs.usfca.edu/~galles/visualization/BTree.html",
          children: "https://www.cs.usfca.edu/~galles/visualization/BTree.html"
        })]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h4, {
      id: "btree",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#btree",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "B+Tree"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "结构图："
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.img, {
        src: "https://dhc.pythonanywhere.com/media/editor/B+Tree%E7%BB%93%E6%9E%84%E5%9B%BE_20220316170700591277.png",
        alt: "B+Tree结构图",
        title: "B+Tree结构图",
        className: "article-img"
      })
    }), "\n", jsxRuntimeExports.jsxs(_components.blockquote, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.p, {
        children: ["演示地址：", jsxRuntimeExports.jsx(_components.a, {
          href: "https://www.cs.usfca.edu/~galles/visualization/BPlusTree.html",
          children: "https://www.cs.usfca.edu/~galles/visualization/BPlusTree.html"
        })]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "与 B-Tree 的区别："
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "所有的数据都会出现在叶子节点"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "叶子节点形成一个单向链表"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "MySQL 索引数据结构对经典的 B+Tree 进行了优化。在原 B+Tree 的基础上，增加一个指向相邻叶子节点的链表指针，就形成了带有顺序指针的 B+Tree，提高区间访问的性能。"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.img, {
        src: "https://dhc.pythonanywhere.com/media/editor/%E7%BB%93%E6%9E%84%E5%9B%BE_20220316171730865611.png",
        alt: "MySQL B+Tree 结构图",
        title: "MySQL B+Tree 结构图",
        className: "article-img"
      })
    }), "\n", jsxRuntimeExports.jsxs(_components.h4, {
      id: "hash",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#hash",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "Hash"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["哈希索引就是采用一定的hash算法，将键值换算成新的hash值，映射到对应的槽位上，然后存储在hash表中。", jsxRuntimeExports.jsx(_components.br, {}), "\n如果两个（或多个）键值，映射到一个相同的槽位上，他们就产生了hash冲突（也称为hash碰撞），可以通过链表来解决。"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.img, {
        src: "https://dhc.pythonanywhere.com/media/editor/Hash%E7%B4%A2%E5%BC%95%E5%8E%9F%E7%90%86%E5%9B%BE_20220317143226150679.png",
        alt: "Hash索引原理图",
        title: "Hash索引原理图",
        className: "article-img"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "特点："
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "Hash索引只能用于对等比较（=、in），不支持范围查询（betwwn、>、<、...）"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "无法利用索引完成排序操作"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "查询效率高，通常只需要一次检索就可以了，效率通常要高于 B+Tree 索引"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "存储引擎支持："
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "Memory"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "InnoDB: 具有自适应hash功能，hash索引是存储引擎根据 B+Tree 索引在指定条件下自动构建的"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h4, {
      id: "面试题",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#面试题",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "面试题"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ol, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "为什么 InnoDB 存储引擎选择使用 B+Tree 索引结构？"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "相对于二叉树，层级更少，搜索效率高"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "对于 B-Tree，无论是叶子节点还是非叶子节点，都会保存数据，这样导致一页中存储的键值减少，指针也跟着减少，要同样保存大量数据，只能增加树的高度，导致性能降低"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "相对于 Hash 索引，B+Tree 支持范围匹配及排序操作"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "索引分类",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#索引分类",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "索引分类"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", jsxRuntimeExports.jsxs(_components.table, {
      children: [jsxRuntimeExports.jsx(_components.thead, {
        children: jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.th, {
            children: "分类"
          }), jsxRuntimeExports.jsx(_components.th, {
            children: "含义"
          }), jsxRuntimeExports.jsx(_components.th, {
            children: "特点"
          }), jsxRuntimeExports.jsx(_components.th, {
            children: "关键字"
          })]
        })
      }), jsxRuntimeExports.jsxs(_components.tbody, {
        children: [jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "主键索引"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "针对于表中主键创建的索引"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "默认自动创建，只能有一个"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "PRIMARY"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "唯一索引"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "避免同一个表中某数据列中的值重复"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "可以有多个"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "UNIQUE"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "常规索引"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "快速定位特定数据"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "可以有多个"
          }), jsxRuntimeExports.jsx(_components.td, {})]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "全文索引"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "全文索引查找的是文本中的关键词，而不是比较索引中的值"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "可以有多个"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "FULLTEXT"
          })]
        })]
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "在 InnoDB 存储引擎中，根据索引的存储形式，又可以分为以下两种："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", jsxRuntimeExports.jsxs(_components.table, {
      children: [jsxRuntimeExports.jsx(_components.thead, {
        children: jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.th, {
            children: "分类"
          }), jsxRuntimeExports.jsx(_components.th, {
            children: "含义"
          }), jsxRuntimeExports.jsx(_components.th, {
            children: "特点"
          })]
        })
      }), jsxRuntimeExports.jsxs(_components.tbody, {
        children: [jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "聚集索引(Clustered Index)"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "将数据存储与索引放一块，索引结构的叶子节点保存了行数据"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "必须有，而且只有一个"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "二级索引(Secondary Index)"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "将数据与索引分开存储，索引结构的叶子节点关联的是对应的主键"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "可以存在多个"
          })]
        })]
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "演示图："
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.img, {
        src: "https://dhc.pythonanywhere.com/media/editor/%E5%8E%9F%E7%90%86%E5%9B%BE_20220318194454880073.png",
        alt: "大致原理",
        title: "大致原理",
        className: "article-img"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.img, {
        src: "https://dhc.pythonanywhere.com/media/editor/%E6%BC%94%E7%A4%BA%E5%9B%BE_20220319215403721066.png",
        alt: "演示图",
        title: "演示图",
        className: "article-img"
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "聚集索引选取规则："
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "如果存在主键，主键索引就是聚集索引"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "如果不存在主键，将使用第一个唯一(UNIQUE)索引作为聚集索引"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "如果表没有主键或没有合适的唯一索引，则 InnoDB 会自动生成一个 rowid 作为隐藏的聚集索引"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h4, {
      id: "思考题",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#思考题",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "思考题"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "1. 以下 SQL 语句，哪个执行效率高？为什么？"
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-mysql",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "mysql"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "user"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "id"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "10"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "user"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Arm"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "备注"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "："
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "id为主键"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "，"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name字段创建的有索引"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "答：第一条语句，因为第二条需要回表查询，相当于两个步骤。"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "2. InnoDB 主键索引的 B+Tree 高度为多少？"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["答：假设一行数据大小为1k，一页中可以存储16行这样的数据。InnoDB 的指针占用6个字节的空间，主键假设为bigint，占用字节数为8.", jsxRuntimeExports.jsx(_components.br, {}), "\n可得公式：", jsxRuntimeExports.jsx(_components.code, {
        children: "n * 8 + (n + 1) * 6 = 16 * 1024"
      }), "，其中 8 表示 bigint 占用的字节数，n 表示当前节点存储的key的数量，(n + 1) 表示指针数量（比key多一个）。算出n约为1170。"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["如果树的高度为2，那么他能存储的数据量大概为：", jsxRuntimeExports.jsx(_components.code, {
        children: "1171 * 16 = 18736"
      }), "；", jsxRuntimeExports.jsx(_components.br, {}), "\n如果树的高度为3，那么他能存储的数据量大概为：", jsxRuntimeExports.jsx(_components.code, {
        children: "1171 * 1171 * 16 = 21939856"
      }), "。"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "另外，如果有成千上万的数据，那么就要考虑分表，涉及运维篇知识。"
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "语法",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#语法",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "语法"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["创建索引：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "CREATE [ UNIQUE | FULLTEXT ] INDEX index_name ON table_name (index_col_name, ...);"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n如果不加 CREATE 后面不加索引类型参数，则创建的是常规索引"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["查看索引：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "SHOW INDEX FROM table_name;"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["删除索引：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "DROP INDEX index_name ON table_name;"
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "案例："
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-mysql",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "mysql"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name字段为姓名字段"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "，"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "该字段的值可能会重复"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "，"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "为该字段创建索引"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "create"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "index"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "idx_user_name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "on"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "tb_user"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "phone手机号字段的值非空"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "，"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "且唯一"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "，"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "为该字段创建唯一索引"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "create"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "unique"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "index"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "idx_user_phone"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "on"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "tb_user"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "phone"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "为profession"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "age"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "status创建联合索引"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "create"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "index"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "idx_user_pro_age_stat"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "on"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "tb_user"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "profession"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "age"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "status"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "为email建立合适的索引来提升查询效率"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "create"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "index"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "idx_user_email"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "on"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "tb_user"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "email"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "删除索引"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "drop"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "index"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "idx_user_email"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "on"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "tb_user"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "使用规则",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#使用规则",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "使用规则"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h4, {
      id: "最左前缀法则",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#最左前缀法则",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "最左前缀法则"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["如果索引关联了多列（联合索引），要遵守最左前缀法则，最左前缀法则指的是查询从索引的最左列开始，并且不跳过索引中的列。", jsxRuntimeExports.jsx(_components.br, {}), "\n如果跳跃某一列，索引将部分失效（后面的字段索引失效）。"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "联合索引中，出现范围查询（<, >），范围查询右侧的列索引失效。可以用>=或者<=来规避索引失效问题。"
    }), "\n", jsxRuntimeExports.jsxs(_components.h4, {
      id: "索引失效情况",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#索引失效情况",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "索引失效情况"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ol, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["在索引列上进行运算操作，索引将失效。如：", jsxRuntimeExports.jsx(_components.code, {
          children: "explain select * from tb_user where substring(phone, 10, 2) = '15';"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["字符串类型字段使用时，不加引号，索引将失效。如：", jsxRuntimeExports.jsx(_components.code, {
          children: "explain select * from tb_user where phone = 17799990015;"
        }), "，此处phone的值没有加引号"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["模糊查询中，如果仅仅是尾部模糊匹配，索引不会是失效；如果是头部模糊匹配，索引失效。如：", jsxRuntimeExports.jsx(_components.code, {
          children: "explain select * from tb_user where profession like '%工程';"
        }), "，前后都有 % 也会失效。"]
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "用 or 分割开的条件，如果 or 其中一个条件的列没有索引，那么涉及的索引都不会被用到。"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "如果 MySQL 评估使用索引比全表更慢，则不使用索引。"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h4, {
      id: "sql-提示",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#sql-提示",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "SQL 提示"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "是优化数据库的一个重要手段，简单来说，就是在SQL语句中加入一些人为的提示来达到优化操作的目的。"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["例如，使用索引：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: 'explain select * from tb_user use index(idx_user_pro) where profession="软件工程";'
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n不使用哪个索引：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: 'explain select * from tb_user ignore index(idx_user_pro) where profession="软件工程";'
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n必须使用哪个索引：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: 'explain select * from tb_user force index(idx_user_pro) where profession="软件工程";'
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "use 是建议，实际使用哪个索引 MySQL 还会自己权衡运行速度去更改，force就是无论如何都强制使用该索引。"
    }), "\n", jsxRuntimeExports.jsxs(_components.h4, {
      id: "覆盖索引回表查询",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#覆盖索引回表查询",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "覆盖索引&回表查询"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "尽量使用覆盖索引（查询使用了索引，并且需要返回的列，在该索引中已经全部能找到），减少 select *。"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["explain 中 extra 字段含义：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "using index condition"
      }), "：查找使用了索引，但是需要回表查询数据", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "using where; using index;"
      }), "：查找使用了索引，但是需要的数据都在索引列中能找到，所以不需要回表查询"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["如果在聚集索引中直接能找到对应的行，则直接返回行数据，只需要一次查询，哪怕是select *；如果在辅助索引中找聚集索引，如", jsxRuntimeExports.jsx(_components.code, {
        children: "select id, name from xxx where name='xxx';"
      }), "，也只需要通过辅助索引(name)查找到对应的id，返回name和name索引对应的id即可，只需要一次查询；如果是通过辅助索引查找其他字段，则需要回表查询，如", jsxRuntimeExports.jsx(_components.code, {
        children: "select id, name, gender from xxx where name='xxx';"
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["所以尽量不要用", jsxRuntimeExports.jsx(_components.code, {
        children: "select *"
      }), "，容易出现回表查询，降低效率，除非有联合索引包含了所有字段"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["面试题：一张表，有四个字段（id, username, password, status），由于数据量大，需要对以下SQL语句进行优化，该如何进行才是最优方案：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "select id, username, password from tb_user where username='itcast';"
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "解：给username和password字段建立联合索引，则不需要回表查询，直接覆盖索引"
    }), "\n", jsxRuntimeExports.jsxs(_components.h4, {
      id: "前缀索引",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#前缀索引",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "前缀索引"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "当字段类型为字符串（varchar, text等）时，有时候需要索引很长的字符串，这会让索引变得很大，查询时，浪费大量的磁盘IO，影响查询效率，此时可以只降字符串的一部分前缀，建立索引，这样可以大大节约索引空间，从而提高索引效率。"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["语法：", jsxRuntimeExports.jsx(_components.code, {
        children: "create index idx_xxxx on table_name(columnn(n));"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n前缀长度：可以根据索引的选择性来决定，而选择性是指不重复的索引值（基数）和数据表的记录总数的比值，索引选择性越高则查询效率越高，唯一索引的选择性是1，这是最好的索引选择性，性能也是最好的。", jsxRuntimeExports.jsx(_components.br, {}), "\n求选择性公式："]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-mysql",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "mysql"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "count"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "distinct"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "email"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "/"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "count"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "tb_user"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "count"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "distinct"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "substring"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "email"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "1"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "5"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")) "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "/"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "count"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "tb_user"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "show index 里面的sub_part可以看到接取的长度"
    }), "\n", jsxRuntimeExports.jsxs(_components.h4, {
      id: "单列索引联合索引",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#单列索引联合索引",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "单列索引&联合索引"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["单列索引：即一个索引只包含单个列", jsxRuntimeExports.jsx(_components.br, {}), "\n联合索引：即一个索引包含了多个列", jsxRuntimeExports.jsx(_components.br, {}), "\n在业务场景中，如果存在多个查询条件，考虑针对于查询字段建立索引时，建议建立联合索引，而非单列索引。"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["单列索引情况：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "explain select id, phone, name from tb_user where phone = '17799990010' and name = '韩信';"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n这句只会用到phone索引字段"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h5, {
      id: "注意事项-8",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#注意事项-8",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "注意事项"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "多条件联合查询时，MySQL优化器会评估哪个字段的索引效率更高，会选择该索引完成本次查询"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "设计原则",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#设计原则",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "设计原则"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ol, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "针对于数据量较大，且查询比较频繁的表建立索引"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "针对于常作为查询条件（where）、排序（order by）、分组（group by）操作的字段建立索引"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "尽量选择区分度高的列作为索引，尽量建立唯一索引，区分度越高，使用索引的效率越高"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "如果是字符串类型的字段，字段长度较长，可以针对于字段的特点，建立前缀索引"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "尽量使用联合索引，减少单列索引，查询时，联合索引很多时候可以覆盖索引，节省存储空间，避免回表，提高查询效率"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "要控制索引的数量，索引并不是多多益善，索引越多，维护索引结构的代价就越大，会影响增删改的效率"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "如果索引列不能存储NULL值，请在创建表时使用NOT NULL约束它。当优化器知道每列是否包含NULL值时，它可以更好地确定哪个索引最有效地用于查询"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "sql-优化",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#sql-优化",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "SQL 优化"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "插入数据",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#插入数据",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "插入数据"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "普通插入："
    }), "\n", jsxRuntimeExports.jsxs(_components.ol, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "采用批量插入（一次插入的数据不建议超过1000条）"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "手动提交事务"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "主键顺序插入"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["大批量插入：", jsxRuntimeExports.jsx(_components.br, {}), "\n如果一次性需要插入大批量数据，使用insert语句插入性能较低，此时可以使用MySQL数据库提供的load指令插入。"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-mysql",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "mysql"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "# "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "客户端连接服务端时"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "，"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "加上参数"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "local"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "infile"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "（"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "这一行在bash"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "/"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "cmd界面输入"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "）"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "mysql"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "local"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "infile"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "u"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "root"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "p"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "# "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "设置全局参数local_infile为1"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "，"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "开启从本地加载文件导入数据的开关"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "set"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "global"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "local_infile"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "1"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D08770"
              },
              children: "@"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "@"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D08770"
              },
              children: "local_infile"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "# "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "执行load指令将准备好的数据"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "，"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "加载到表结构中"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "load"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "data"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "local"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "infile"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "/root/sql1.log"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "into"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "table"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "tb_user"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "fields"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "terminated"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "by"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "lines"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "terminated"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "by"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#EBCB8B"
              },
              children: "\\n"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "主键优化",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#主键优化",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "主键优化"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "数据组织方式：在InnoDB存储引擎中，表数据都是根据主键顺序组织存放的，这种存储方式的表称为索引组织表（Index organized table, IOT）"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["页分裂：页可以为空，也可以填充一般，也可以填充100%，每个页包含了2-N行数据（如果一行数据过大，会行溢出），根据主键排列。", jsxRuntimeExports.jsx(_components.br, {}), "\n页合并：当删除一行记录时，实际上记录并没有被物理删除，只是记录被标记（flaged）为删除并且它的空间变得允许被其他记录声明使用。当页中删除的记录到达 MERGE_THRESHOLD（默认为页的50%），InnoDB会开始寻找最靠近的页（前后）看看是否可以将这两个页合并以优化空间使用。"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "MERGE_THRESHOLD：合并页的阈值，可以自己设置，在创建表或创建索引时指定"
    }), "\n", jsxRuntimeExports.jsxs(_components.blockquote, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.p, {
        children: ["文字说明不够清晰明了，具体可以看视频里的PPT演示过程：", jsxRuntimeExports.jsx(_components.a, {
          href: "https://www.bilibili.com/video/BV1Kr4y1i7ru?p=90",
          children: "https://www.bilibili.com/video/BV1Kr4y1i7ru?p=90"
        })]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "主键设计原则："
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "满足业务需求的情况下，尽量降低主键的长度"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "插入数据时，尽量选择顺序插入，选择使用 AUTO_INCREMENT 自增主键"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "尽量不要使用 UUID 做主键或者是其他的自然主键，如身份证号"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "业务操作时，避免对主键的修改"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "order-by优化",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#order-by优化",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "order by优化"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ol, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "Using filesort：通过表的索引或全表扫描，读取满足条件的数据行，然后在排序缓冲区 sort buffer 中完成排序操作，所有不是通过索引直接返回排序结果的排序都叫 FileSort 排序"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "Using index：通过有序索引顺序扫描直接返回有序数据，这种情况即为 using index，不需要额外排序，操作效率高"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["如果order by字段全部使用升序排序或者降序排序，则都会走索引，但是如果一个字段升序排序，另一个字段降序排序，则不会走索引，explain的extra信息显示的是", jsxRuntimeExports.jsx(_components.code, {
        children: "Using index, Using filesort"
      }), "，如果要优化掉Using filesort，则需要另外再创建一个索引，如：", jsxRuntimeExports.jsx(_components.code, {
        children: "create index idx_user_age_phone_ad on tb_user(age asc, phone desc);"
      }), "，此时使用", jsxRuntimeExports.jsx(_components.code, {
        children: "select id, age, phone from tb_user order by age asc, phone desc;"
      }), "会全部走索引"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "总结："
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "根据排序字段建立合适的索引，多字段排序时，也遵循最左前缀法则"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "尽量使用覆盖索引"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "多字段排序，一个升序一个降序，此时需要注意联合索引在创建时的规则（ASC/DESC）"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "如果不可避免出现filesort，大数据量排序时，可以适当增大排序缓冲区大小 sort_buffer_size（默认256k）"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "group-by优化",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#group-by优化",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "group by优化"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "在分组操作时，可以通过索引来提高效率"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "分组操作时，索引的使用也是满足最左前缀法则的"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["如索引为", jsxRuntimeExports.jsx(_components.code, {
        children: "idx_user_pro_age_stat"
      }), "，则句式可以是", jsxRuntimeExports.jsx(_components.code, {
        children: "select ... where profession order by age"
      }), "，这样也符合最左前缀法则"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "limit优化",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#limit优化",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "limit优化"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["常见的问题如", jsxRuntimeExports.jsx(_components.code, {
        children: "limit 2000000, 10"
      }), "，此时需要 MySQL 排序前2000000条记录，但仅仅返回2000000 - 2000010的记录，其他记录丢弃，查询排序的代价非常大。", jsxRuntimeExports.jsx(_components.br, {}), "\n优化方案：一般分页查询时，通过创建覆盖索引能够比较好地提高性能，可以通过覆盖索引加子查询形式进行优化"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "例如："
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-mysql",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "mysql"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "此语句耗时很长"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "tb_sku"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "limit"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "9000000"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "10"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "通过覆盖索引加快速度"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "，"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "直接通过主键索引进行排序及查询"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "id"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "tb_sku"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "order"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "by"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "id"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "limit"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "9000000"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "10"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "下面的语句是错误的"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "，"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "因为"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "MySQL"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "不支持"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "in"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "里面使用"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "limit"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "tb_sku"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "where"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "id"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "in"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "id"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "tb_sku"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "order"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "by"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "id"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "limit"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "9000000"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "10"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "--"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "通过连表查询即可实现第一句的效果"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "，"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "并且能达到第二句的速度"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "tb_sku"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "as"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " s"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "select"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "id"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "tb_sku"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "order"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "by"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "id"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "limit"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "9000000"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "10"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "as"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " a where s"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "id = a"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "id"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "count优化",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#count优化",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "count优化"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["MyISAM 引擎把一个表的总行数存在了磁盘上，因此执行 count(*) 的时候会直接返回这个数，效率很高（前提是不适用where）；", jsxRuntimeExports.jsx(_components.br, {}), "\nInnoDB 在执行 count(*) 时，需要把数据一行一行地从引擎里面读出来，然后累计计数。", jsxRuntimeExports.jsx(_components.br, {}), "\n优化方案：自己计数，如创建key-value表存储在内存或硬盘，或者是用redis"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "count的几种用法："
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "如果count函数的参数（count里面写的那个字段）不是NULL（字段值不为NULL），累计值就加一，最后返回累计值"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "用法：count(*)、count(主键)、count(字段)、count(1)"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "count(主键)跟count(*)一样，因为主键不能为空；count(字段)只计算字段值不为NULL的行；count(1)引擎会为每行添加一个1，然后就count这个1，返回结果也跟count(*)一样；count(null)返回0"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "各种用法的性能："
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "count(主键)：InnoDB引擎会遍历整张表，把每行的主键id值都取出来，返回给服务层，服务层拿到主键后，直接按行进行累加（主键不可能为空）"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "count(字段)：没有not null约束的话，InnoDB引擎会遍历整张表把每一行的字段值都取出来，返回给服务层，服务层判断是否为null，不为null，计数累加；有not null约束的话，InnoDB引擎会遍历整张表把每一行的字段值都取出来，返回给服务层，直接按行进行累加"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "count(1)：InnoDB 引擎遍历整张表，但不取值。服务层对于返回的每一层，放一个数字 1 进去，直接按行进行累加"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "count(*)：InnoDB 引擎并不会把全部字段取出来，而是专门做了优化，不取值，服务层直接按行进行累加"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "按效率排序：count(字段) < count(主键) < count(1) < count(*)，所以尽量使用 count(*)"
    }), "\n", jsxRuntimeExports.jsxs(_components.h3, {
      id: "update优化避免行锁升级为表锁",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#update优化避免行锁升级为表锁",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "update优化（避免行锁升级为表锁）"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "InnoDB 的行锁是针对索引加的锁，不是针对记录加的锁，并且该索引不能失效，否则会从行锁升级为表锁。"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["如以下两条语句：", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "update student set no = '123' where id = 1;"
      }), "，这句由于id有主键索引，所以只会锁这一行；", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: "update student set no = '123' where name = 'test';"
      }), "，这句由于name没有索引，所以会把整张表都锁住进行数据更新，解决方法是给name字段添加索引"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h1, {
      id: "数据类型",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#数据类型",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "数据类型"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "整型",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#整型",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "整型"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", jsxRuntimeExports.jsxs(_components.table, {
      children: [jsxRuntimeExports.jsx(_components.thead, {
        children: jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.th, {
            children: "类型名称"
          }), jsxRuntimeExports.jsx(_components.th, {
            children: "取值范围"
          }), jsxRuntimeExports.jsx(_components.th, {
            children: "大小"
          })]
        })
      }), jsxRuntimeExports.jsxs(_components.tbody, {
        children: [jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "TINYINT"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "-128〜127"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "1个字节"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "SMALLINT"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "-32768〜32767"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "2个宇节"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "MEDIUMINT"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "-8388608〜8388607"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "3个字节"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "INT (INTEGHR)"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "-2147483648〜2147483647"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "4个字节"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "BIGINT"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "-9223372036854775808〜9223372036854775807"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "8个字节"
          })]
        })]
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "无符号在数据类型后加 unsigned 关键字。"
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "浮点型",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#浮点型",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "浮点型"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", jsxRuntimeExports.jsxs(_components.table, {
      children: [jsxRuntimeExports.jsx(_components.thead, {
        children: jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.th, {
            children: "类型名称"
          }), jsxRuntimeExports.jsx(_components.th, {
            children: "说明"
          }), jsxRuntimeExports.jsx(_components.th, {
            children: "存储需求"
          })]
        })
      }), jsxRuntimeExports.jsxs(_components.tbody, {
        children: [jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "FLOAT"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "单精度浮点数"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "4 个字节"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "DOUBLE"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "双精度浮点数"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "8 个字节"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "DECIMAL (M, D)，DEC"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "压缩的“严格”定点数"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "M+2 个字节"
          })]
        })]
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "日期和时间",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#日期和时间",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "日期和时间"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", jsxRuntimeExports.jsxs(_components.table, {
      children: [jsxRuntimeExports.jsx(_components.thead, {
        children: jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.th, {
            children: "类型名称"
          }), jsxRuntimeExports.jsx(_components.th, {
            children: "日期格式"
          }), jsxRuntimeExports.jsx(_components.th, {
            children: "日期范围"
          }), jsxRuntimeExports.jsx(_components.th, {
            children: "存储需求"
          })]
        })
      }), jsxRuntimeExports.jsxs(_components.tbody, {
        children: [jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "YEAR"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "YYYY"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "1901 ~ 2155"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "1 个字节"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "TIME"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "HH:MM:SS"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "-838:59:59 ~ 838:59:59"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "3 个字节"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "DATE"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "YYYY-MM-DD"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "1000-01-01 ~ 9999-12-3"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "3 个字节"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "DATETIME"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "YYYY-MM-DD HH:MM:SS"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "1000-01-01 00:00:00 ~ 9999-12-31 23:59:59"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "8 个字节"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "TIMESTAMP"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "YYYY-MM-DD HH:MM:SS"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "1980-01-01 00:00:01 UTC ~ 2040-01-19 03:14:07 UTC"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "4 个字节"
          })]
        })]
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "字符串",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#字符串",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "字符串"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", jsxRuntimeExports.jsxs(_components.table, {
      children: [jsxRuntimeExports.jsx(_components.thead, {
        children: jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.th, {
            children: "类型名称"
          }), jsxRuntimeExports.jsx(_components.th, {
            children: "说明"
          }), jsxRuntimeExports.jsx(_components.th, {
            children: "存储需求"
          })]
        })
      }), jsxRuntimeExports.jsxs(_components.tbody, {
        children: [jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "CHAR(M)"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "固定长度非二进制字符串"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "M 字节，1<=M<=255"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "VARCHAR(M)"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "变长非二进制字符串"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "L+1字节，在此，L< = M和 1<=M<=255"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "TINYTEXT"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "非常小的非二进制字符串"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "L+1字节，在此，L<2^8"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "TEXT"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "小的非二进制字符串"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "L+2字节，在此，L<2^16"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "MEDIUMTEXT"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "中等大小的非二进制字符串"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "L+3字节，在此，L<2^24"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "LONGTEXT"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "大的非二进制字符串"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "L+4字节，在此，L<2^32"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "ENUM"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "枚举类型，只能有一个枚举字符串值"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "1或2个字节，取决于枚举值的数目 (最大值为65535)"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "SET"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "一个设置，字符串对象可以有零个或 多个SET成员"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "1、2、3、4或8个字节，取决于集合 成员的数量（最多64个成员）"
          })]
        })]
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "二进制类型",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#二进制类型",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "二进制类型"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", jsxRuntimeExports.jsxs(_components.table, {
      children: [jsxRuntimeExports.jsx(_components.thead, {
        children: jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.th, {
            children: "类型名称"
          }), jsxRuntimeExports.jsx(_components.th, {
            children: "说明"
          }), jsxRuntimeExports.jsx(_components.th, {
            children: "存储需求"
          })]
        })
      }), jsxRuntimeExports.jsxs(_components.tbody, {
        children: [jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "BIT(M)"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "位字段类型"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "大约 (M+7)/8 字节"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "BINARY(M)"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "固定长度二进制字符串"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "M 字节"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "VARBINARY (M)"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "可变长度二进制字符串"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "M+1 字节"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "TINYBLOB (M)"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "非常小的BLOB"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "L+1 字节，在此，L<2^8"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "BLOB (M)"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "小 BLOB"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "L+2 字节，在此，L<2^16"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "MEDIUMBLOB (M)"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "中等大小的BLOB"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "L+3 字节，在此，L<2^24"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            children: "LONGBLOB (M)"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "非常大的BLOB"
          }), jsxRuntimeExports.jsx(_components.td, {
            children: "L+4 字节，在此，L<2^32"
          })]
        })]
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h1, {
      id: "权限一览表",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#权限一览表",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "权限一览表"]
    }), "\n", jsxRuntimeExports.jsxs(_components.blockquote, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.p, {
        children: ["具体权限的作用详见", jsxRuntimeExports.jsx(_components.a, {
          href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html",
          title: "官方文档",
          children: "官方文档"
        })]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "GRANT 和 REVOKE 允许的静态权限"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", jsxRuntimeExports.jsxs(_components.table, {
      children: [jsxRuntimeExports.jsx(_components.thead, {
        children: jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Privilege"
          }), jsxRuntimeExports.jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Grant Table Column"
          }), jsxRuntimeExports.jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Context"
          })]
        })
      }), jsxRuntimeExports.jsxs(_components.tbody, {
        children: [jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_all",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "ALL [PRIVILEGES]"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Synonym for “all privileges”"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Server administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_alter",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "ALTER"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.code, {
              children: "Alter_priv"
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Tables"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_alter-routine",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "ALTER ROUTINE"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.code, {
              children: "Alter_routine_priv"
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Stored routines"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_create",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "CREATE"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.code, {
              children: "Create_priv"
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Databases, tables, or indexes"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_create-role",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "CREATE ROLE"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.code, {
              children: "Create_role_priv"
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Server administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_create-routine",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "CREATE ROUTINE"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.code, {
              children: "Create_routine_priv"
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Stored routines"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_create-tablespace",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "CREATE TABLESPACE"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.code, {
              children: "Create_tablespace_priv"
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Server administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_create-temporary-tables",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "CREATE TEMPORARY TABLES"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.code, {
              children: "Create_tmp_table_priv"
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Tables"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_create-user",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "CREATE USER"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.code, {
              children: "Create_user_priv"
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Server administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_create-view",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "CREATE VIEW"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.code, {
              children: "Create_view_priv"
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Views"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_delete",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "DELETE"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.code, {
              children: "Delete_priv"
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Tables"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_drop",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "DROP"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.code, {
              children: "Drop_priv"
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Databases, tables, or views"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_drop-role",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "DROP ROLE"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.code, {
              children: "Drop_role_priv"
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Server administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_event",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "EVENT"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.code, {
              children: "Event_priv"
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Databases"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_execute",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "EXECUTE"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.code, {
              children: "Execute_priv"
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Stored routines"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_file",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "FILE"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.code, {
              children: "File_priv"
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "File access on server host"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_grant-option",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "GRANT OPTION"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.code, {
              children: "Grant_priv"
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Databases, tables, or stored routines"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_index",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "INDEX"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.code, {
              children: "Index_priv"
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Tables"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_insert",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "INSERT"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.code, {
              children: "Insert_priv"
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Tables or columns"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_lock-tables",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "LOCK TABLES"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.code, {
              children: "Lock_tables_priv"
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Databases"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_process",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "PROCESS"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.code, {
              children: "Process_priv"
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Server administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_proxy",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "PROXY"
              })
            })
          }), jsxRuntimeExports.jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["See ", jsxRuntimeExports.jsx(_components.code, {
              children: "proxies_priv"
            }), " table"]
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Server administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_references",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "REFERENCES"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.code, {
              children: "References_priv"
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Databases or tables"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_reload",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "RELOAD"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.code, {
              children: "Reload_priv"
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Server administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_replication-client",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "REPLICATION CLIENT"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.code, {
              children: "Repl_client_priv"
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Server administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_replication-slave",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "REPLICATION SLAVE"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.code, {
              children: "Repl_slave_priv"
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Server administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_select",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "SELECT"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.code, {
              children: "Select_priv"
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Tables or columns"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_show-databases",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "SHOW DATABASES"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.code, {
              children: "Show_db_priv"
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Server administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_show-view",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "SHOW VIEW"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.code, {
              children: "Show_view_priv"
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Views"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_shutdown",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "SHUTDOWN"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.code, {
              children: "Shutdown_priv"
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Server administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_super",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "SUPER"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.code, {
              children: "Super_priv"
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Server administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_trigger",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "TRIGGER"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.code, {
              children: "Trigger_priv"
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Tables"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_update",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "UPDATE"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.code, {
              children: "Update_priv"
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Tables or columns"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_usage",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "USAGE"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Synonym for “no privileges”"
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Server administration"
          })]
        })]
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "GRANT 和 REVOKE 允许的动态权限"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", jsxRuntimeExports.jsxs(_components.table, {
      children: [jsxRuntimeExports.jsx(_components.thead, {
        children: jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Privilege"
          }), jsxRuntimeExports.jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Context"
          })]
        })
      }), jsxRuntimeExports.jsxs(_components.tbody, {
        children: [jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_application-password-admin",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "APPLICATION_PASSWORD_ADMIN"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Dual password administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_audit-abort-exempt",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "AUDIT_ABORT_EXEMPT"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Allow queries blocked by audit log filter"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_audit-admin",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "AUDIT_ADMIN"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Audit log administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_authentication-policy-admin",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "AUTHENTICATION_POLICY_ADMIN"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Authentication administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_backup-admin",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "BACKUP_ADMIN"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Backup administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_binlog-admin",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "BINLOG_ADMIN"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Backup and Replication administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_binlog-encryption-admin",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "BINLOG_ENCRYPTION_ADMIN"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Backup and Replication administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_clone-admin",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "CLONE_ADMIN"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Clone administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_connection-admin",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "CONNECTION_ADMIN"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Server administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_encryption-key-admin",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "ENCRYPTION_KEY_ADMIN"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Server administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_firewall-admin",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "FIREWALL_ADMIN"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Firewall administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_firewall-exempt",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "FIREWALL_EXEMPT"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Firewall administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_firewall-user",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "FIREWALL_USER"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Firewall administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_flush-optimizer-costs",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "FLUSH_OPTIMIZER_COSTS"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Server administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_flush-status",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "FLUSH_STATUS"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Server administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_flush-tables",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "FLUSH_TABLES"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Server administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_flush-user-resources",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "FLUSH_USER_RESOURCES"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Server administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_group-replication-admin",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "GROUP_REPLICATION_ADMIN"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Replication administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_group-replication-stream",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "GROUP_REPLICATION_STREAM"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Replication administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_innodb-redo-log-archive",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "INNODB_REDO_LOG_ARCHIVE"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Redo log archiving administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_ndb-stored-user",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "NDB_STORED_USER"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "NDB Cluster"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_passwordless-user-admin",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "PASSWORDLESS_USER_ADMIN"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Authentication administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_persist-ro-variables-admin",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "PERSIST_RO_VARIABLES_ADMIN"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Server administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_replication-applier",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "REPLICATION_APPLIER"
              })
            })
          }), jsxRuntimeExports.jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [jsxRuntimeExports.jsx(_components.code, {
              children: "PRIVILEGE_CHECKS_USER"
            }), " for a replication channel"]
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_replication-slave-admin",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "REPLICATION_SLAVE_ADMIN"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Replication administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_resource-group-admin",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "RESOURCE_GROUP_ADMIN"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Resource group administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_resource-group-user",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "RESOURCE_GROUP_USER"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Resource group administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_role-admin",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "ROLE_ADMIN"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Server administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_session-variables-admin",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "SESSION_VARIABLES_ADMIN"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Server administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_set-user-id",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "SET_USER_ID"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Server administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_show-routine",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "SHOW_ROUTINE"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Server administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_system-user",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "SYSTEM_USER"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Server administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_system-variables-admin",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "SYSTEM_VARIABLES_ADMIN"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Server administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_table-encryption-admin",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "TABLE_ENCRYPTION_ADMIN"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Server administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_version-token-admin",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "VERSION_TOKEN_ADMIN"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Server administration"
          })]
        }), jsxRuntimeExports.jsxs(_components.tr, {
          children: [jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsxRuntimeExports.jsx(_components.a, {
              href: "https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_xa-recover-admin",
              children: jsxRuntimeExports.jsx(_components.code, {
                children: "XA_RECOVER_ADMIN"
              })
            })
          }), jsxRuntimeExports.jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Server administration"
          })]
        })]
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h1, {
      id: "图形化界面工具",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#图形化界面工具",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "图形化界面工具"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Workbench(免费): ", jsxRuntimeExports.jsx(_components.a, {
          href: "http://dev.mysql.com/downloads/workbench/",
          children: "http://dev.mysql.com/downloads/workbench/"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["navicat(收费，试用版30天): ", jsxRuntimeExports.jsx(_components.a, {
          href: "https://www.navicat.com/en/download/navicat-for-mysql",
          children: "https://www.navicat.com/en/download/navicat-for-mysql"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Sequel Pro(开源免费，仅支持Mac OS): ", jsxRuntimeExports.jsx(_components.a, {
          href: "http://www.sequelpro.com/",
          children: "http://www.sequelpro.com/"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["HeidiSQL(免费): ", jsxRuntimeExports.jsx(_components.a, {
          href: "http://www.heidisql.com/",
          children: "http://www.heidisql.com/"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["phpMyAdmin(免费): ", jsxRuntimeExports.jsx(_components.a, {
          href: "https://www.phpmyadmin.net/",
          children: "https://www.phpmyadmin.net/"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["SQLyog: ", jsxRuntimeExports.jsx(_components.a, {
          href: "https://sqlyog.en.softonic.com/",
          children: "https://sqlyog.en.softonic.com/"
        })]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h1, {
      id: "安装",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#安装",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "安装"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h1, {
      id: "小技巧",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#小技巧",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "小技巧"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ol, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["在SQL语句之后加上", jsxRuntimeExports.jsx(_components.code, {
          children: "\\G"
        }), "会将结果的表格形式转换成行文本形式"]
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "查看Mysql数据库占用空间："
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "language-mysql",
      children: [jsxRuntimeExports.jsx(_components.div, {
        className: "highlight-tools",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "lang",
          children: "mysql"
        })
      }), jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "SELECT"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "table_schema"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Database Name"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "     "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "SUM"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "data_length"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "+"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "index_length"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "/"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "1024"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "1024"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Database Size in MB"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "FROM"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "information_schema"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "TABLES"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "GROUP"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "BY"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "table_schema"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsxs(_components.h1, {
      id: "后续内容",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#后续内容",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "后续内容"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["后续内容因为跟当前学习、工作计划有冲突，所以后续课程的学习计划会无限期推后。", jsxRuntimeExports.jsx(_components.br, {}), "\n目前的工作重点放在重做一个学习笔记网站，当然这是边做边学的，开发过程中遇到的难点和知识点我也会记录下来供大家学习。", jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: "在此感谢B站同样爱学习的同学 @守心-人 提供的后续课程笔记，大家有条件一定要去给个star，你的每一个star和点赞都是我们前进的动力"
      }), jsxRuntimeExports.jsx(_components.br, {}), "\n", jsxRuntimeExports.jsx(_components.strong, {
        children: jsxRuntimeExports.jsx(_components.a, {
          href: "https://github.com/Buildings-Lei/mysql_note/blob/main/README.md",
          children: "https://github.com/Buildings-Lei/mysql_note/blob/main/README.md"
        })
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntimeExports.jsx(MDXLayout, {
    ...props,
    children: jsxRuntimeExports.jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
export {
  MDXContent as default,
  frontmatter,
  mdInfo,
  toc
};
