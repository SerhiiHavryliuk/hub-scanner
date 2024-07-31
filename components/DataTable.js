// components/DataTable.js
'use client';

const tableStyle = {
  borderCollapse: 'collapse',
  width: '100%',
};

const cellStyle = {
  border: '1px solid black',
  padding: '8px',
  textAlign: 'left',
};

const headerStyle = {
  ...cellStyle,
  backgroundColor: '#f2f2f2',
};

// Функція для визначення кольору в залежності від CMD
const getCmdColor = (cmd) => {
  switch (cmd) {
    case '23':
      return '#27e696'; // зелений 
    case '116':
      return '#eb34e8'; // фіолетовий
    case '31':
      return '#d64f4f'; // червоний
    case '101':
      return '#ff1099'; // червоний
    default:
      return '#ffffff'; // білий для значень за замовчуванням
  }
};

const DataTable = ({ data }) => {
  // Розділяємо дані на рядки
  const lines = data.split('\n');
  
  // Допустимі значення CMD
  const allowedCommands = ['31', '116', '23', '101'];

  // Фільтруємо рядки, що містять допустимі CMD
  const filteredLines = lines.filter(line => {
    const match = line.match(/CMD=(\d+)/);
    //return match && allowedCommands.includes(match[1]);
    return match
  });

  // Розділяємо рядки на дату, CMD та вміст
  const parsedLines = filteredLines.map(line => {
    const dateMatch = line.match(/^\[(.*?)\]/);
    const cmdMatch = line.match(/CMD=(\d+)/);
    const content = line.replace(/^\[.*?\]\s*/, '').replace(/CMD=\d+/, '').trim();

    return {
      date: dateMatch ? dateMatch[1] : '',
      cmd: cmdMatch ? cmdMatch[1] : '',
      content
    };
  });

  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={headerStyle}>#</th>
          <th style={headerStyle}>Date</th>
          <th style={headerStyle}>CMD</th>
          <th style={headerStyle}>Line</th>
        </tr>
      </thead>
      <tbody>
        {parsedLines.map((line, index) => (
          <tr key={index}>
            <td style={cellStyle}>{index + 1}</td>
            <td style={cellStyle}>{line.date}</td>
            <td style={{ ...cellStyle, backgroundColor: getCmdColor(line.cmd) }}>{line.cmd}</td>
            <td style={cellStyle}>{line.content}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
