import { Card } from "~/components/Card";
import { Section } from "~/components/Section";
import { SimpleLayout } from "~/components/SimpleLayout";

export function meta() {
  return {
    title: "Uses - Josh Larson",
    description:
      "Software I use, gadgets I love, and other things I recommend.",
  };
}

export default function Uses() {
  return (
    <SimpleLayout
      title="The things I use"
      intro="Some poeple are interested in the things other people use to do their daily work. Here is one of those lists."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="13” MacBook Air, M1, Rose Gold, 16GB RAM (2020)">
            M1 is great. I don't even need all the RAM I had before. It feels
            like the battery lasts all week, and it's super lightweight and
            portable. Love the color, too. YOLO.
          </Tool>
          <Tool title="TODO: 4K Monitor">
            My pals at Shopify sent me this, and it's really nice to have a High
            DPI display to work on.
          </Tool>
          <Tool title="Regular Apple Keyboard">
            I'm not a keyboard snob. It gets the job done.
          </Tool>
          <Tool title="USB Mouse">
            It's not even that good. Shopify sent it to me, and it allows me to
            point and click on things.
          </Tool>
          <Tool title="TODO Standing Desk">
            It's very, very nice. I used to have a white Autonomous, but this
            one feels much more solid and "at home" than the corporate-feeling
            Autonomous desk.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="VSCode">
            It's dope. Works well for my Laravel and React projects.
          </Tool>
          <Tool title="Hyper">It's a neat terminal made by Vercel.</Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            We started using Figma as just a design tool but now it’s become our
            virtual whiteboard for the entire company. Never would have expected
            the collaboration features to be the real hook.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="LogSeq">
            I use it for journaling and note-taking. It’s a great tool for TODOs
            and keeping track of things I want to do. Very helpful for work.
          </Tool>
          <Tool title="Reminders (iOS)">
            I ask Siri to add things to my reminders, and they remind me to do
            so.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  );
}

function ToolsSection({
  children,
  ...props
}: { children: React.ReactNode } & React.ComponentProps<typeof Section>) {
  return (
    <Section {...props}>
      <ul className="space-y-16">{children}</ul>
    </Section>
  );
}

function Tool({
  title,
  href,
  children,
}: {
  title: string;
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" to={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
}
