const Background = ({ varColor = '#FFFFFF' }) => 
{
  return (
    <div
      style={{
        background: varColor,
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        overflow: 'hidden',
        zIndex: -5,
        pointerEvents: 'none',
      }}
    />
  );
};
export default Background;

