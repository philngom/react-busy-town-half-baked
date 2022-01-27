export default function Vehicle({ vehicle }) {
  return <div className="vehicle">
    {
      vehicle === 'car' ? '🚗'
        : vehicle === 'truck' ? '🚚'
          : vehicle === 'bus' ? '🚌'
            : vehicle === 'motorcycle' ? '🏍️'
              : ''
    }
  </div>;
}