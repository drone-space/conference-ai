import React from "react";

import { Box, Button, Divider, Group, List, Stack, Text, Title } from "@mantine/core";

import { Icon, IconCheck, IconChevronRight } from "@tabler/icons-react";

import classes from "./Audience.module.scss";

export default function Audience({ data }: { data: { icon: Icon; title: string } }) {
	return (
		<Stack className={classes.card} gap={"xl"}>
			<Stack gap={"xl"} align="center">
				<div className={classes.icon}>
					<data.icon size={48} />
				</div>
				<Title order={3} fz={"xl"} ta={"center"}>
					{data.title}
				</Title>
			</Stack>
		</Stack>
	);
}
