import { Box, Flex, Stack } from '@chakra-ui/react';
import React from 'react';
import { chunkArray } from '../helpers/chunkArray';
import { DateColumn } from './DateColumn';

interface ColumnGroupProps {
    dates: Date[];
    title: string;
    subtitle?: string;
    columnSize?: number;
    months?: boolean;
    years?: boolean;
}

export const DateColumnGroup: React.FC<ColumnGroupProps> = ({
    dates,
    title,
    columnSize = 6,
    subtitle = '',
    ...rest
}) => {
    return (
        <Stack>
            <Flex
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
            >
                <Box mt={2} textAlign="center" fontWeight="semibold">
                    {title}
                </Box>
                {Boolean(subtitle) && (
                    <Box
                        mt={2}
                        ml={2}
                        textAlign="center"
                        fontWeight="medium"
                        fontSize="sm"
                    >
                        {subtitle}
                    </Box>
                )}
            </Flex>
            <Flex>
                {chunkArray(dates, columnSize).map((list, i) => (
                    <DateColumn dates={list} {...rest} key={i} />
                ))}
            </Flex>
        </Stack>
    );
};
