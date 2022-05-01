import { useMemo } from "react";
import content from "../public/content.json";

export const useContent = (permalink: string) =>
  useMemo(
    () =>
      content.items
        .filter((item) => item.sys.contentType.sys.id === "contentPage")
        .find((content) => content.fields.permalink === permalink),
    [permalink]
  );
