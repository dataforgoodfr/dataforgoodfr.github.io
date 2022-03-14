/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';
import {MDXProvider} from '@mdx-js/react';

import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import MDXComponents from '@theme/MDXComponents';
import type {Props} from '@theme/BlogPostItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './styles.module.css';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];



const MagicTag = ({tagLabel,tagPermalink}) => {

  let badgeClass;
  if (tagLabel.toLowerCase().slice(0,6) === "saison" || tagLabel.toLowerCase().slice(0,7) === "monthly"){
    badgeClass = "badge-season";
  } else if (tagLabel === "Actif"){
    badgeClass = "badge-active";
  } else {
    badgeClass = "";
  }
  return (
    <span className={`badge badge--primary ${badgeClass}`}>
      <Link
        key={tagPermalink}
        to={tagPermalink}>
        {tagLabel}
      </Link>
    </span>
  )
}

const MagicSDG = ({tagLabel}) => {
  let sdgNumber = tagLabel.slice(3,)
  let sdgPath = useBaseUrl(`img/sdgs/E-WEB-Goal-${sdgNumber}.png`);
  let tagPermalink = `projects/tags/sdg-${sdgNumber}`;
  return (
    <img src={sdgPath} className="sdg-icon"/>
    // <Link
    //   key={tagPermalink}
    //   to={tagPermalink}>
    //   <img src={sdgPath} className="sdg-icon"/>
    // </Link>
  )
}




function BlogPostPreview(props: Props): JSX.Element {
  const {
    children,
    frontMatter,
    metadata,
    truncated,
    isBlogPostPage = false,
  } = props;
  const {date, permalink, tags, readingTime} = metadata;
  const {author, title, image, keywords,description} = frontMatter;
  let headerImageURL = frontMatter.header_image_url;
  headerImageURL = useBaseUrl(headerImageURL);

  const authorURL = frontMatter.author_url || frontMatter.authorURL;
  const authorTitle = frontMatter.author_title || frontMatter.authorTitle;
  const authorImageURL =
    frontMatter.author_image_url || frontMatter.authorImageURL;
  const imageUrl = useBaseUrl(image, {absolute: true});
  const isBlog = permalink.slice(0,5) === "/blog";

  const renderPostHeader = () => {
    const TitleHeading = isBlogPostPage ? 'h1' : 'h2';
    const match = date.substring(0, 10).split('-');
    const year = match[0];
    const month = MONTHS[parseInt(match[1], 10) - 1];
    const day = parseInt(match[2], 10);

    return (
      <header>
        <TitleHeading
          style={{"fontSize":16}}
          className={clsx('margin-bottom--sm', styles.blogPostTitle)}>
          {isBlogPostPage ? title : <Link to={permalink}>{title}</Link>}
        </TitleHeading>
        <p style={{fontSize:14,lineHeight:1.2}}>{description}</p>
        {/* <div className="margin-vert--md">
          <time dateTime={date} className={styles.blogPostDate}>
            {month} {day}, {year}{' '}
            {readingTime && <> · {Math.ceil(readingTime)} min read</>}
          </time>
        </div> */}
        <div className="avatar margin-vert--md">
          {authorImageURL && (
            <a
              className="avatar__photo-link avatar__photo"
              href={authorURL}
              target="_blank"
              rel="noreferrer noopener">
              <img src={authorImageURL} alt={author} />
            </a>
          )}
          { isBlog && (
          <div className="avatar__intro">
            {author && (
              <>
                {/* <h4 className="avatar__name">
                  <a href={authorURL} target="_blank" rel="noreferrer noopener">
                    {author}
                  </a>
                </h4> */}
                <time dateTime={date} className={styles.blogPostDate}>
                  {month} {day}, {year}{' '}
                  {readingTime && <> · {Math.ceil(readingTime)} min read</>}
                </time>
                {/* <small className="avatar__subtitle">{authorTitle}</small> */}
              </>
            )}
          </div>
          )}

        </div>
      </header>
    );
  };

  return (
    <div className="card">
      <div className="card__image">
        <img
          src={headerImageURL}
          // src="https://images.unsplash.com/photo-1506624183912-c602f4a21ca7?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="Image alt text"
          title="Logo Title Text 1"
        />
      </div>
      <div className="card__body">
      <Head>
        {keywords && keywords.length && (
          <meta name="keywords" content={keywords.join(',')} />
        )}
        {image && <meta property="og:image" content={imageUrl} />}
        {image && <meta name="twitter:image" content={imageUrl} />}
        {image && (
          <meta name="twitter:image:alt" content={`Image for ${title}`} />
        )}
      </Head>

      <article>
        {renderPostHeader()}

        {/* <section className="markdown">
          <MDXProvider components={MDXComponents}>{children}</MDXProvider>
        </section> */}
        {(tags.length > 0 || truncated) && (
          <footer className="margin-vert--sm">
            <div className="row">
            {tags.length > 0 && (
              <div className="col">
                {/* <strong>Tags:</strong> */}
                {tags.map(({label, permalink: tagPermalink}) => (
                  (label.slice(0,3) !== "sdg" && <MagicTag tagLabel={label} tagPermalink={tagPermalink}/>)
                ))}
              </div>
            )}
            {/* {truncated && (
              <div className="col text--right">
                <Link
                  to={metadata.permalink}
                  aria-label={`Read more about ${title}`}>
                  <strong>Read More</strong>
                </Link>
              </div>
            )} */}
            </div>
            { frontMatter.sdgs && (
              <div className="row sdgs-wrapper">
                {frontMatter.sdgs.sort().map(el => (<MagicSDG tagLabel={el}/>))}
              </div>
            )}
          </footer>
        )}
      </article>
      </div>
    </div>
  );
}

export default BlogPostPreview;
