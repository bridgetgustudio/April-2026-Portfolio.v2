import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Lightbulb, type LucideIcon } from 'lucide-react';

interface TimelineItemProps {
  year: string;
  title: string;
  organization: string;
  description: string;
  imageUrls: string[];
  index: number;
  onInView: (index: number) => void;
  keyTakeaway?: string;
  takeawayIcon?: LucideIcon;
  skills?: string[];
}

export function TimelineItem({ 
  year, 
  title, 
  organization, 
  description, 
  imageUrls, 
  index,
  onInView,
  keyTakeaway,
  takeawayIcon: TakeawayIcon,
  skills
}: TimelineItemProps) {
  const ref = useRef(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    if (isInView && !hasBeenInView) {
      setHasBeenInView(true);
      onInView(index);
    }
  }, [isInView, index, onInView, hasBeenInView]);

  return (
    <div ref={ref} className="relative mb-48 last:mb-32">
      
    </div>
  );
}