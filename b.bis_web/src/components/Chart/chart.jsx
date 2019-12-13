import React from 'react';
import { ResponsiveLine } from '@nivo/line';

import data from '../../fake_data/data';
import config from './config';

import './chart.css';

// eslint-disable-next-line react/prefer-stateless-function
class Chart extends React.Component {
  render() {
    return (
      <div className="chart">
        <ResponsiveLine
          data={data}
          margin={config.margin}
          xScale={{ type: 'point' }}
          yScal={{
            type: 'linear', stacked: true, min: 'auto', max: 'auto',
          }}
          colors={{ scheme: 'nivo' }}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabel="y"
          pointLabelYOffset={-12}
          useMesh
          axisTop={null}
          axisRight={null}
          axisBottom={config.axisBottom}
          axisLeft={config.axisLeft}
          onClick={(point) => console.log(point)}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemBackground: 'rgba(255, 255, 255, .03)',
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </div>
    );
  }
}

export default Chart;
