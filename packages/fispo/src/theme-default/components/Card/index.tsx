import styles from "./index.module.scss";
import AuthorCard, { AuthorCardProps } from "./AuthorCard";
import AnnouncementCard, { AnnouncementCardProps } from "./AnnouncementCard";
import ArticleCard, { ArticleCardProps } from "./ArticleCard";
import ListCard, { ListCardProps } from "./ListCard";
import TocCard, { TocCardProps } from "./TocCard";
import TagCard, { TagCardProps } from "./TagCard";

interface CardProps {
  type: "author" | "announcement" | "list" | "article" | "toc" | "tag";
  authorData?: AuthorCardProps;
  announcementData?: AnnouncementCardProps;
  listData?: ListCardProps;
  articleData?: ArticleCardProps;
  tocData?: TocCardProps;
  tagData?: TagCardProps;
}

function Card(props: CardProps) {
  const {
    type,
    authorData,
    listData,
    articleData,
    tocData,
    announcementData,
    tagData,
  } = props;

  const getContent = () => {
    switch (type) {
      case "author":
        return <AuthorCard {...authorData} />;
      case "announcement":
        return <AnnouncementCard {...announcementData} />;
      case "list":
        return <ListCard {...listData} />;
      case "article":
        return <ArticleCard {...articleData} />;
      case "toc":
        return <TocCard {...tocData} />;
      case "tag":
        return <TagCard {...tagData} />;
      default:
        return <></>;
    }
  };

  return <div className={styles.card}>{getContent()}</div>;
}

export default Card;
