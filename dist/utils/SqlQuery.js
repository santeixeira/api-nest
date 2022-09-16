"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SqlQuery {
    insert(columns, values) {
        return `INSERT INTO inventory (${columns}) VALUES (${values})`;
    }
}
exports.default = SqlQuery;
//# sourceMappingURL=SqlQuery.js.map