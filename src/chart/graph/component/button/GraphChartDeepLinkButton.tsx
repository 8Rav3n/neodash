import React from 'react';
import { Fab, Tooltip } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { replaceDashboardParametersInString } from '../../../ChartUtils';
import { GraphChartVisualizationProps } from '../../GraphChartVisualization';

export const NeoGraphChartDeepLinkButton = (props: GraphChartVisualizationProps) => {
  return (
    <a
      href={replaceDashboardParametersInString(props.interactivity.drilldownLink, props.data.parameters)}
      target='_blank'
    >
      <Fab
        style={{ position: 'absolute', backgroundColor: 'steelblue', right: '15px', zIndex: 50, top: '5px' }}
        color='primary'
        size='small'
        aria-label='search'
      >
        <Tooltip title='Investigate' aria-label=''>
          <SearchIcon />
        </Tooltip>
      </Fab>
    </a>
  );
};
