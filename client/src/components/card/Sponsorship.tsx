import React from "react";

import { Box, Button, Divider, Group, List, Stack, Text, Title } from "@mantine/core";

import classes from "./Sponsorship.module.scss";
import { IconCheck, IconChevronRight } from "@tabler/icons-react";

export default function Sponsorship({ data }: { data: { title: string; price: string; desc: string[] } }) {
	return (
		<Stack className={classes.card} gap={"xl"} justify="space-between">
			<Stack gap={"xl"}>
				<Stack gap={"xs"} align="center">
					<Text ta={"center"} fw={500} fz={32} c={"pri.4"}>
						{data.price}
					</Text>
					<Title order={3} fz={24} ta={"center"}>
						{data.title} Sponsorship Package
					</Title>
				</Stack>
				<Divider color="pri.4" />
				<Stack fz="sm">
					{data.desc.map(item => (
						<Group key={item} wrap="nowrap" align="start">
							<Text component="span" c={"pri.4"}>
								<IconCheck size={16} />
							</Text>
							<Text key={item} inherit>
								{item}
							</Text>
						</Group>
					))}
				</Stack>
			</Stack>
			<Stack gap={"xl"}>
				<Divider color="pri.4" />
				<Button fullWidth>Register</Button>
			</Stack>
		</Stack>
	);
}