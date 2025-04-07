import styled from 'styled-components';
import { CatImageResponse } from '../../pub.types';

type ViewerProps = {
  data: CatImageResponse;
};

type ImageProps = {
  $aspectRatio: number;
};

const Image = styled.img<ImageProps>`
  width: 100%;
  aspect-ratio: ${(props) => props.$aspectRatio};
`;

const StyledViewer = ({ data }: ViewerProps) => {
  if (!data) return null;

  return <Image src={data.url} alt={data.id} $aspectRatio={data.width / data.height} />;
};

export default StyledViewer;
