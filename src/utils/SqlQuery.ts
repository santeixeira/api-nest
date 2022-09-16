export default class SqlQuery {
  public insert(columns: string, values: string): string {
    return `INSERT INTO inventory (${columns}) VALUES (${values})`;
  }
}
