export const dynamic = "force-dynamic";

import { api } from "~/trpc/server";
import { Rating } from "./rating";
import { DeleteMyImageButton } from "./delete-my-image-button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
export async function Gallery() {
  const images = await api.image.getMyImages();
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
      {images.map((image) => (
        <Card key={image.id}>
          <CardHeader>
            <CardTitle>{image.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src={image.url}
              alt={image.name}
              width={200}
              height={200}
              className="h-48 w-full rounded-md object-cover"
            />
          </CardContent>
          <Rating imageId={image.id} />
          <CardFooter>
            <DeleteMyImageButton imageId={image.id} />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
