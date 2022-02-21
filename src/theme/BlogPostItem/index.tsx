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
import Admonition from '@theme/Admonition';
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

const MagicSDGBig = ({tagLabel}) => {
  let sdgNumber = tagLabel.slice(3,)
  let sdgPath = useBaseUrl(`img/sdgs/E-WEB-Goal-${sdgNumber}.png`);
  let tagPermalink = `tags/sdg-${sdgNumber}`;
  return (
    <Link
      key={tagPermalink}
      to={tagPermalink}>
      <img src={sdgPath} className="sdg-icon-big"/>
    </Link>
  )
}


function BlogPostItem(props: Props): JSX.Element {
  const {
    children,
    frontMatter,
    metadata,
    truncated,
    isBlogPostPage = false,
  } = props;

  const {date, permalink, tags, readingTime} = metadata;
  const {author, title, image, keywords,description} = frontMatter;

  const isBlog = permalink.slice(0,5) === "/blog";
  console.log(title,isBlog);

  const authorURL = frontMatter.author_url || frontMatter.authorURL;
  const authorTitle = frontMatter.author_title || frontMatter.authorTitle;
  const authorImageURL =
    frontMatter.author_image_url || frontMatter.authorImageURL;
  const imageUrl = useBaseUrl(image, {absolute: true});

  let headerImageURL = frontMatter.header_image_url;
  headerImageURL = useBaseUrl(headerImageURL);


  const renderPostHeader = () => {
    const TitleHeading = isBlogPostPage ? 'h1' : 'h2';
    const match = date.substring(0, 10).split('-');
    const year = match[0];
    const month = MONTHS[parseInt(match[1], 10) - 1];
    const day = parseInt(match[2], 10);

    return (
      <header>
        <TitleHeading
          className={clsx('margin-bottom--sm', styles.blogPostTitle)}>
          {isBlogPostPage ? title : <Link to={permalink}>{title}</Link>}
        </TitleHeading>
        <div className="margin-vert--md">
          {description && <p>{description}</p>}
          {
            isBlog && (
              <time dateTime={date} className={styles.blogPostDate}>
                {month} {day}, {year}{' '}
                {readingTime && <> · {Math.ceil(readingTime)} min read</>}
              </time>
            )
          }

        </div>
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
          <div className="avatar__intro">
            {author && (
              <>
                <h4 className="avatar__name">
                  Written by <a href={authorURL} target="_blank" rel="noreferrer noopener">{author}</a>
                </h4>
                <small className="avatar__subtitle">{authorTitle}</small>
              </>
            )}
          </div>
        </div>
        <div className="margin-vert--md">
          <img className="img-blog-header" src={headerImageURL}/>
        </div>
        {
          isBlog === false && (

            <div>
              
              { frontMatter.sdgs && (
                <div className="row sdgs-wrapper">
                  {frontMatter.sdgs.sort().map(el => (<MagicSDGBig tagLabel={el}/>))}
                </div>
              )}

              <div className="">
                <Admonition type="info" title="A RETENIR">
                  <p>
                    <ul>
                      <li>Projet - {frontMatter.title}</li>
                      {frontMatter.github && (<li>GitHub - {frontMatter.github}</li>)}
                      {frontMatter.slack && (<li>Slack channel - {frontMatter.slack}</li>)}
                      {frontMatter.website && (<li>Website - {frontMatter.website}</li>)}
                    </ul>
                  </p>
                </Admonition>
              </div>
            </div>
          )
        }

      </header>
    );
  };

  return (
    <>
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

      <article className={!isBlogPostPage ? 'margin-bottom--xl' : undefined}>
        {renderPostHeader()}
        <section className="markdown blog-article-custom">
          <MDXProvider components={MDXComponents}>{children}</MDXProvider>
        </section>
        {(tags.length > 0 || truncated) && (
          <footer className="row margin-vert--lg">
            {tags.length > 0 && (
              <div className="col">
                <strong>Tags:</strong>
                {tags.map(({label, permalink: tagPermalink}) => (
                  <Link
                    key={tagPermalink}
                    className="margin-horiz--sm"
                    to={tagPermalink}>
                    {label}
                  </Link>
                ))}
              </div>
            )}
            {truncated && (
              <div className="col text--right">
                <Link
                  to={metadata.permalink}
                  aria-label={`Read more about ${title}`}>
                  <strong>Read More</strong>
                </Link>
              </div>
            )}
          </footer>
        )}
      </article>
    </>
  );
}

export default BlogPostItem;
