const SingleInfo = ({ text, Icon, href }) => {
  const content = (
    <div className="group flex items-center gap-4 text-base text-gray-100 transition-transform duration-300 ease-in-out hover:text-orange-400 hover:scale-[1.03]">
      <Icon className="text-2xl text-gray-100 group-hover:text-orange-400 transition-transform duration-300 group-hover:-translate-y-1" />
      <span className="font-medium">{text}</span>
    </div>
  );

  return href ? (
    <a href={href} className="w-fit" target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
};

export default SingleInfo;
