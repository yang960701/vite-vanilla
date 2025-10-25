import {
  Overlay,
  AspectRatio,
  Button,
  Stack,
  Slider,
  Space,
} from "@mantine/core";
import { useState } from "react";

export default function Blur() {
  const [visible, setVisible] = useState(true);
  const [value, setValue] = useState(40);
  return (
    <Stack>
      <AspectRatio ratio={16 / 9} maw={400} mx="auto" pos="relative">
        <img
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png"
          alt="Demo"
          style={{ objectFit: "cover" }}
        />

        <Slider
          color="blue"
          defaultValue={value}
          onChange={(v) => setValue(v)}
          marks={[
            { value: 20, label: "20%" },
            { value: 50, label: "50%" },
            { value: 80, label: "80%" },
          ]}
        />

        <Space />
        <Overlay
          color="#000"
          backgroundOpacity={0.35}
          blur={value}
          zIndex={1}
        />
      </AspectRatio>
      <>
        <AspectRatio ratio={16 / 9} maw={400} mx="auto" pos="relative">
          <img
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
            alt="Demo"
          />
          {visible && (
            <Overlay
              gradient="linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)"
              opacity={0.85}
            />
          )}
        </AspectRatio>
        <Button
          onClick={() => setVisible((v) => !v)}
          fullWidth
          maw={200}
          mx="auto"
          mt="xl"
        >
          Toggle overlay
        </Button>
      </>
    </Stack>
  );
}
