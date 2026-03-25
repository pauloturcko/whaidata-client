import type { Meta, StoryObj } from "@storybook/nextjs";
import { Button } from "./index";

const meta: Meta<typeof Button> = {
    title: "Core/Button",
    component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: "Clique aqui",
    },
};

export const Danger: Story = {
    args: {
        children: "Deletar",
        background: "danger",
    },
};

export const Disabled: Story = {
    args: {
        children: "Desabilitado",
        disabled: true,
    },
};