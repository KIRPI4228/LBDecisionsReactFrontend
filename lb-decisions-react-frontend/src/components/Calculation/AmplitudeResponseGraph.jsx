import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';




const AmplitudeResponseGraph = (props) => (
  <AreaChart
    style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
    responsive
    data={props.amplitudeResponse}
    margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
    <defs>
      <linearGradient id="colorAmplitude" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
      </linearGradient>
    </defs>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="frequency" />
    <YAxis width="auto" />
    <Tooltip />
    <Area
      type="monotone"
      dataKey="amplitude"
      stroke="#8884d8"
      fillOpacity={1}
      fill="url(#colorAmplitude)"
      isAnimationActive="true"
      animationBegin={200}
      animationDuration={1300}
    />
    
  </AreaChart>
);

export default AmplitudeResponseGraph;