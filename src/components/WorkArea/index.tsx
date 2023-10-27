import React from 'react';
// import cx from 'clsx';
import classes from './workArea.module.css';
import {
  IconStarFilled,
  IconStar,
  //   IconMinus,
  //   IconPlus
} from '@tabler/icons-react';
// import { NavLink } from '@mantine/core';
/**
 * GraphQL API
 *  @see https://studio.apollographql.com/public/rick-and-morty-a3b90u/variant/current/explorer
 *
 *  Rest API
 *  @see https://rickandmortyapi.com/documentation/#rest
 */
/**
 * @desc Renders WorkArea component
 * @constructor
 */
export function WorkArea() {
  // const { data } = useData();

  return (
    <div className={classes.workArea}>
      <IconStarFilled />
      <IconStar />
    </div>
  );
}
