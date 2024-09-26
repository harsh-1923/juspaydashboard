import "./DirectoryView.css";
import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronRight } from "lucide-react";

interface SubItem {
  name: string;
  link: string;
}

interface DirectoryItem {
  name: string;
  icon: JSX.Element;
  subs: SubItem[];
}

interface DirectoryViewProps {
  directory: DirectoryItem[];
}

const DirectoryView: React.FC<DirectoryViewProps> = ({ directory }) => {
  const renderDirectory = (items: DirectoryItem[]) => {
    return (
      <Accordion.Root type="multiple">
        {items.map((item) => (
          <Accordion.Item key={item.name} value={item.name}>
            <Accordion.Trigger className="directory-folder">
              <div className="directory-chevron-wrapper">
                {item.subs.length > 0 && <ChevronRight size={14} />}
              </div>
              <div>{item.icon}</div>
              {item.name}
            </Accordion.Trigger>
            <Accordion.Content className="directory-content">
              {item.subs.map((sub) => (
                <div key={sub.name} className="directory-folder">
                  {sub.name}
                </div>
              ))}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    );
  };

  return <div className="directory-root">{renderDirectory(directory)}</div>;
};

export default DirectoryView;
