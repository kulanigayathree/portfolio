import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { SiFigma } from 'react-icons/si'; // ✅ added Figma icon from react-icons
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
   figmaLink?: string; // ✅ new line
}
export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  liveLink,
  githubLink,
   figmaLink // ✅ new
}) => {
  return <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform hover:scale-105" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => <span key={index} className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
              {tag}
            </span>)}
        </div>
        <div className="flex gap-3">
          {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 flex items-center gap-1 text-sm">
              <Github  size={16} /> Code
            </a>}
          {liveLink && <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 flex items-center gap-1 text-sm">
              <ExternalLink size={16} /> visit
            </a>}

            {figmaLink && (
    <a
      href={figmaLink}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-blue-600 flex items-center gap-1 text-sm"
    >
      <SiFigma size={16} />Figma
    </a>

  )}
        </div>
      </div>
    </div>;
};