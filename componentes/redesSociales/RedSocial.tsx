import Image from 'next/image';
import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';

import { EnlaceRedes } from './StyledRedesSociales';

interface Props {
	href: string;
	src: string;
	width: number;
	height: number;
}

export const RedSocial: FC<PropsWithChildren<Props>> = ({
	href,
	src,
	width,
	height,
}) => {
	return (
		<Link href={href} passHref legacyBehavior>
			<EnlaceRedes>
				<Image
					src={src}
					alt='Default Image'
					width={width}
					height={height}
				/>
			</EnlaceRedes>
		</Link>
	);
};
