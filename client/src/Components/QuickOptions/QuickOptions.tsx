import * as Tabs from "@radix-ui/react-tabs";
import "./QuickOptions.css";

const QuickOptions = () => {
  return (
    <div>
      <Tabs.Root defaultValue="Favorites">
        <Tabs.List>
          <Tabs.Trigger className="quick-options-trigger" value="Favorites">
            Favorites
          </Tabs.Trigger>
          <Tabs.Trigger className="quick-options-trigger" value="Recently">
            Recently
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className="" value="Favorites">
          Hello
        </Tabs.Content>
        <Tabs.Content className="" value="Recently">
          Recently
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};

export default QuickOptions;
