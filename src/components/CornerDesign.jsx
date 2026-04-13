const CornerDesign = () => {
  return (
    <>
      <span className="absolute top-0 left-0 w-3 h-0.5 bg-primary"></span>
      <span className="absolute top-0 left-0 w-0.5 h-3 bg-primary"></span>

      {/* Top Right */}
      <span className="absolute top-0 right-0 w-3 h-0.5 bg-primary"></span>
      <span className="absolute top-0 right-0 w-0.5 h-3 bg-primary"></span>

      {/* Bottom Left */}
      <span className="absolute bottom-0 left-0 w-3 h-0.5 bg-primary"></span>
      <span className="absolute bottom-0 left-0 w-0.5 h-3 bg-primary"></span>

      {/* Bottom Right */}
      <span className="absolute bottom-0 right-0 w-3 h-0.5 bg-primary"></span>
      <span className="absolute bottom-0 right-0 w-0.5 h-3 bg-primary"></span>
    </>
  );
};
export default CornerDesign;
