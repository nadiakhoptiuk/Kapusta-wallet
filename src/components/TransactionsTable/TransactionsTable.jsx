import s from './TransactionsTable.module.css';

const TransactionsTable = () => {
  return (
    <div>
      <table className={s.table}>
        <thead className={s.tableHead}>
          <tr className={s.tableRow}>
            <th className={s.tableTitle}>Date</th>
            <th className={s.tableTitle}>Description</th>
            <th className={s.tableTitle}>Category</th>
            <th className={s.tableTitle}>Sum</th>
            <th className={s.lastTD}></th>
          </tr>
        </thead>
        <tbody className={s.tableBody}>
          <tr className={s.tableRow}>
            <td className={s.description}>05.09.2019</td>
            <td className={s.description}>Бананы</td>
            <td className={s.description}>Transport</td>
            <td className={s.description}>- 30.00 грн.</td>
            <td className={s.descriptionLast}>
              <button className={s.btnDelete}></button>
            </td>
          </tr>
          <tr className={s.tableRow}>
            <td className={s.description}>05.09.2019</td>
            <td className={s.description}>Бананы</td>
            <td className={s.description}>Transport</td>
            <td className={s.description}>- 30.00 грн.</td>
            <td className={s.descriptionLast}>
              <button className={s.btnDelete}></button>
            </td>
          </tr>
          <tr className={s.tableRow}>
            <td className={s.description}>05.09.2019</td>
            <td className={s.description}>Бананы</td>
            <td className={s.description}>Transport</td>
            <td className={s.description}>- 30.00 грн.</td>
            <td className={s.descriptionLast}>
              <button className={s.btnDelete}></button>
            </td>
          </tr>
          <tr className={s.tableRow}>
            <td className={s.description}>05.09.2019</td>
            <td className={s.description}>Бананы</td>
            <td className={s.description}>Transport</td>
            <td className={s.description}>- 30.00 грн.</td>
            <td className={s.descriptionLast}>
              <button className={s.btnDelete}></button>
            </td>
          </tr>
          <tr className={s.tableRow}>
            <td className={s.description}>05.09.2019</td>
            <td className={s.description}>Бананы</td>
            <td className={s.description}>Transport</td>
            <td className={s.description}>- 30.00 грн.</td>
            <td className={s.descriptionLast}>
              <button className={s.btnDelete}></button>
            </td>
          </tr>
          <tr className={s.tableRow}>
            <td className={s.description}>05.09.2019</td>
            <td className={s.description}>Бананы</td>
            <td className={s.description}>Transport</td>
            <td className={s.description}>- 30.00 грн.</td>
            <td className={s.descriptionLast}>
              <button className={s.btnDelete}></button>
            </td>
          </tr>
          <tr className={s.tableRow}>
            <td className={s.description}>05.09.2019</td>
            <td className={s.description}>Бананы</td>
            <td className={s.description}>Transport</td>
            <td className={s.description}>- 30.00 грн.</td>
            <td className={s.descriptionLast}>
              <button className={s.btnDelete}></button>
            </td>
          </tr>
          <tr className={s.tableRow}>
            <td className={s.description}>05.09.2019</td>
            <td className={s.description}>Бананы</td>
            <td className={s.description}>Transport</td>
            <td className={s.description}>- 30.00 грн.</td>
            <td className={s.descriptionLast}>
              <button className={s.btnDelete}></button>
            </td>
          </tr>
          <tr className={s.tableRow}>
            <td className={s.description}>05.09.2019</td>
            <td className={s.description}>Бананы</td>
            <td className={s.description}>Transport</td>
            <td className={s.description}>- 30.00 грн.</td>
            <td className={s.descriptionLast}>
              <button className={s.btnDelete}></button>
            </td>
          </tr>
          <tr className={s.tableRow}>
            <td className={s.description}>05.09.2019</td>
            <td className={s.description}>Бананы</td>
            <td className={s.description}>Transport</td>
            <td className={s.description}>- 30.00 грн.</td>
            <td className={s.descriptionLast}>
              <button className={s.btnDelete}></button>
            </td>
          </tr>
          <tr className={s.tableRow}>
            <td className={s.description}>05.09.2019</td>
            <td className={s.description}>Бананы</td>
            <td className={s.description}>Transport</td>
            <td className={s.description}>- 30.00 грн.</td>
            <td className={s.descriptionLast}>
              <button className={s.btnDelete}></button>
            </td>
          </tr>
          <tr className={s.tableRow}>
            <td className={s.description}>05.09.2019</td>
            <td className={s.description}>Бананы</td>
            <td className={s.description}>Transport</td>
            <td className={s.description}>- 30.00 грн.</td>
            <td className={s.descriptionLast}>
              <button className={s.btnDelete}></button>
            </td>
          </tr>
          <tr className={s.tableRow}>
            <td className={s.description}>05.09.2019</td>
            <td className={s.description}>Бананы</td>
            <td className={s.description}>Transport</td>
            <td className={s.description}>- 30.00 грн.</td>
            <td className={s.descriptionLast}>
              <button className={s.btnDelete}></button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className={s.tableMobileWrap}>
        <table className={s.mobileTable}>
          <tbody className={s.tBody}>
            <tr className={s.tableRow}>
              <td className={s.column}>
                <span>Бананы</span>
                <span className={s.date}>27.07.2022</span>
              </td>
              <td className={s.date}>Transport</td>
              <td className={s.description}>- 30.00 грн.</td>
              <td className={s.lastTD}>
                <button className={s.btnDelete}></button>
              </td>
            </tr>
            <tr className={s.tableRow}>
              <td className={s.column}>
                <span>Бананы</span>
                <span className={s.date}>27.07.2022</span>
              </td>
              <td className={s.date}>Transport</td>
              <td className={s.description}>- 30.00 грн.</td>
              <td className={s.lastTD}>
                <button className={s.btnDelete}></button>
              </td>
            </tr>
            <tr className={s.tableRow}>
              <td className={s.column}>
                <span>Бананы</span>
                <span className={s.date}>27.07.2022</span>
              </td>
              <td className={s.date}>Transport</td>
              <td className={s.description}>- 30.00 грн.</td>
              <td className={s.lastTD}>
                <button className={s.btnDelete}></button>
              </td>
            </tr>
            <tr className={s.tableRow}>
              <td className={s.column}>
                <span>Бананы</span>
                <span className={s.date}>27.07.2022</span>
              </td>
              <td className={s.date}>Transport</td>
              <td className={s.description}>- 30.00 грн.</td>
              <td className={s.lastTD}>
                <button className={s.btnDelete}></button>
              </td>
            </tr>
            <tr className={s.tableRow}>
              <td className={s.column}>
                <span>Бананы</span>
                <span className={s.date}>27.07.2022</span>
              </td>
              <td className={s.date}>Transport</td>
              <td className={s.description}>- 30.00 грн.</td>
              <td className={s.lastTD}>
                <button className={s.btnDelete}></button>
              </td>
            </tr>
            <tr className={s.tableRow}>
              <td className={s.column}>
                <span>Бананы</span>
                <span className={s.date}>27.07.2022</span>
              </td>
              <td className={s.date}>Transport</td>
              <td className={s.description}>- 30.00 грн.</td>
              <td className={s.lastTD}>
                <button className={s.btnDelete}></button>
              </td>
            </tr>
            <tr className={s.tableRow}>
              <td className={s.column}>
                <span>Бананы</span>
                <span className={s.date}>27.07.2022</span>
              </td>
              <td className={s.date}>Transport</td>
              <td className={s.description}>- 30.00 грн.</td>
              <td className={s.lastTD}>
                <button className={s.btnDelete}></button>
              </td>
            </tr>
            <tr className={s.tableRow}>
              <td className={s.column}>
                <span>Бананы</span>
                <span className={s.date}>27.07.2022</span>
              </td>
              <td className={s.date}>Transport</td>
              <td className={s.description}>- 30.00 грн.</td>
              <td className={s.lastTD}>
                <button className={s.btnDelete}></button>
              </td>
            </tr>
            <tr className={s.tableRow}>
              <td className={s.column}>
                <span>Бананы</span>
                <span className={s.date}>27.07.2022</span>
              </td>
              <td className={s.date}>Transport</td>
              <td className={s.description}>- 30.00 грн.</td>
              <td className={s.lastTD}>
                <button className={s.btnDelete}></button>
              </td>
            </tr>
            <tr className={s.tableRow}>
              <td className={s.column}>
                <span>Бананы</span>
                <span className={s.date}>27.07.2022</span>
              </td>
              <td className={s.date}>Transport</td>
              <td className={s.description}>- 30.00 грн.</td>
              <td className={s.lastTD}>
                <button className={s.btnDelete}></button>
              </td>
            </tr>
            <tr className={s.tableRow}>
              <td className={s.column}>
                <span>Бананы</span>
                <span className={s.date}>27.07.2022</span>
              </td>
              <td className={s.date}>Transport</td>
              <td className={s.description}>- 30.00 грн.</td>
              <td className={s.lastTD}>
                <button className={s.btnDelete}></button>
              </td>
            </tr>
            <tr className={s.tableRow}>
              <td className={s.column}>
                <span>Бананы</span>
                <span className={s.date}>27.07.2022</span>
              </td>
              <td className={s.date}>Transport</td>
              <td className={s.description}>- 30.00 грн.</td>
              <td className={s.lastTD}>
                <button className={s.btnDelete}></button>
              </td>
            </tr>
            <tr className={s.tableRow}>
              <td className={s.column}>
                <span>Бананы</span>
                <span className={s.date}>27.07.2022</span>
              </td>
              <td className={s.date}>Transport</td>
              <td className={s.description}>- 30.00 грн.</td>
              <td className={s.lastTD}>
                <button className={s.btnDelete}></button>
              </td>
            </tr>
            <tr className={s.tableRow}>
              <td className={s.column}>
                <span>Бананы</span>
                <span className={s.date}>27.07.2022</span>
              </td>
              <td className={s.date}>Transport</td>
              <td className={s.description}>- 30.00 грн.</td>
              <td className={s.lastTD}>
                <button className={s.btnDelete}></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsTable;
