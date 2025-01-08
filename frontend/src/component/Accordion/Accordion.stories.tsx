import React from "react";
import type { Meta } from "@storybook/react";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;

export const Default = () => (
  <Accordion>
    <AccordionItem value="item1">
      <AccordionTrigger value="item1">Accordion Item #1</AccordionTrigger>
      <AccordionContent value="item1">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          consequat urna non diam dignissim vehicula.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item2">
      <AccordionTrigger value="item2">Accordion Item #2</AccordionTrigger>
      <AccordionContent value="item2">
        <p>
          Sed felis nulla, lacinia in turpis a, convallis ullamcorper dolor.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item3">
      <AccordionTrigger value="item3">Accordion Item #3</AccordionTrigger>
      <AccordionContent value="item3">
        <p>
          Phasellus ac vulputate felis, vitae sodales nibh. Integer ultrices
          nunc vel nunc suscipit.
        </p>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export const WithDefaultOpen = () => (
  <Accordion defaultValue="item2">
    <AccordionItem value="item1">
      <AccordionTrigger value="item1">Item #1</AccordionTrigger>
      <AccordionContent value="item1">
        <p>Content for item #1</p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item2">
      <AccordionTrigger value="item2">Item #2 (Default Open)</AccordionTrigger>
      <AccordionContent value="item2">
        <p>Content for item #2</p>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);
