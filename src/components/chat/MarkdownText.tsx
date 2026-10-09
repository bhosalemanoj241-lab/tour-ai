import React from 'react';

interface MarkdownTextProps {
  content: string;
  className?: string;
}

export const MarkdownText: React.FC<MarkdownTextProps> = ({ content, className = '' }) => {
  const lines = content.split('\n');

  // Helper to parse bold, italic, code inside line
  const parseInline = (text: string): React.ReactNode => {
    // Split by bold (**text**)
    const boldParts = text.split(/(\*\*[^*]+\*\*)/g);
    return boldParts.map((part, idx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={idx} className="font-semibold text-slate-900">
            {part.slice(2, -2)}
          </strong>
        );
      }
      // Split by italic (*text*)
      const italicParts = part.split(/(\*[^*]+\*)/g);
      return italicParts.map((iPart, iIdx) => {
        if (iPart.startsWith('*') && iPart.endsWith('*')) {
          return (
            <em key={`${idx}-${iIdx}`} className="italic text-slate-700">
              {iPart.slice(1, -1)}
            </em>
          );
        }
        return iPart;
      });
    });
  };

  // Group table rows if any
  const elements: React.ReactNode[] = [];
  let inTable = false;
  let tableRows: string[] = [];

  const flushTable = (key: number) => {
    if (tableRows.length > 0) {
      const headerRow = tableRows[0];
      const dataRows = tableRows.slice(2); // Skip separator row (like | :--- | :--- |)

      const parseRow = (rowStr: string) =>
        rowStr
          .split('|')
          .filter((_, idx, arr) => idx > 0 && idx < arr.length - 1)
          .map((c) => c.trim());

      const headers = parseRow(headerRow);

      elements.push(
        <div key={`table-${key}`} className="my-3 overflow-x-auto rounded-xl border border-slate-200">
          <table className="min-w-full text-left text-xs text-slate-800">
            <thead className="bg-slate-100 font-semibold text-slate-900 border-b border-slate-200">
              <tr>
                {headers.map((h, hIdx) => (
                  <th key={hIdx} className="px-3 py-2 border-r last:border-r-0 border-slate-200">
                    {parseInline(h)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {dataRows.map((r, rIdx) => {
                const cells = parseRow(r);
                return (
                  <tr key={rIdx} className="hover:bg-slate-50/70 transition-colors">
                    {cells.map((c, cIdx) => (
                      <td key={cIdx} className="px-3 py-2 border-r last:border-r-0 border-slate-100">
                        {parseInline(c)}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
      tableRows = [];
    }
    inTable = false;
  };

  lines.forEach((line, idx) => {
    const trimmed = line.trim();

    // Table detection
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      inTable = true;
      tableRows.push(trimmed);
      return;
    } else if (inTable) {
      flushTable(idx);
    }

    // Horizontal rule
    if (trimmed === '---' || trimmed === '***') {
      elements.push(<hr key={idx} className="my-3 border-slate-200" />);
      return;
    }

    // Headings
    if (trimmed.startsWith('### ')) {
      elements.push(
        <h3 key={idx} className="text-base sm:text-lg font-display font-bold text-slate-900 mt-3 mb-1.5 flex items-center gap-1.5">
          {parseInline(trimmed.replace('### ', ''))}
        </h3>
      );
      return;
    }

    if (trimmed.startsWith('#### ')) {
      elements.push(
        <h4 key={idx} className="text-xs sm:text-sm font-display font-bold text-slate-800 mt-2 mb-1 flex items-center gap-1.5">
          {parseInline(trimmed.replace('#### ', ''))}
        </h4>
      );
      return;
    }

    // Checklist item
    if (trimmed.startsWith('- [ ]') || trimmed.startsWith('- [x]')) {
      const isChecked = trimmed.startsWith('- [x]');
      const label = trimmed.replace(/- \[[ x]\]\s*/, '');
      elements.push(
        <div key={idx} className="flex items-center gap-2 py-0.5 text-xs text-slate-700">
          <input type="checkbox" checked={isChecked} readOnly className="rounded text-travel-600 focus:ring-0" />
          <span>{parseInline(label)}</span>
        </div>
      );
      return;
    }

    // Bullet lists
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      elements.push(
        <div key={idx} className="flex items-start gap-2 py-0.5 text-xs text-slate-700 leading-relaxed pl-1">
          <span className="w-1.5 h-1.5 rounded-full bg-travel-500 shrink-0 mt-1.5" />
          <span>{parseInline(trimmed.slice(2))}</span>
        </div>
      );
      return;
    }

    // Numbered lists (e.g. "1. ")
    const numMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
    if (numMatch) {
      elements.push(
        <div key={idx} className="flex items-start gap-2 py-0.5 text-xs text-slate-700 leading-relaxed pl-1">
          <span className="font-semibold text-travel-700 shrink-0 text-[11px] min-w-[14px]">
            {numMatch[1]}.
          </span>
          <span>{parseInline(numMatch[2])}</span>
        </div>
      );
      return;
    }

    // Empty lines
    if (!trimmed) {
      elements.push(<div key={idx} className="h-1.5" />);
      return;
    }

    // Standard paragraph
    elements.push(
      <p key={idx} className="text-xs leading-relaxed text-slate-700">
        {parseInline(trimmed)}
      </p>
    );
  });

  if (inTable) {
    flushTable(lines.length);
  }

  return <div className={`space-y-1 ${className}`}>{elements}</div>;
};
