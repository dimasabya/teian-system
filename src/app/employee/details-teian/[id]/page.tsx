import CardComponenent from "@/app/dashboard/teian/components/cardComponent";
import { getTeianById } from "@/lib/teian/getMyTeian";
import { formatDate } from "@/lib/utils/formatDate";
import { User } from "lucide-react";
import Image from "next/image";
import CardComponents from "../../components/card";
import TrackingTimeline from "../components/tracking-timeline";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function DetailsTeianPage({ params }: Props) {
  const { id } = await params;
  const teian = await getTeianById(id);

  const attachment = teian?.attachments[0];

  console.log(teian);

  return (
    <div className="mb-20">
      <div className="space-y-3">
        <div className="flex justify-between items-center text-xs">
          <h1 className="text-gray-500">Detail Teian</h1>
          <p className="text-xs">{teian?.status}</p>
        </div>
        <h1 className="text-xl text-primary">
          {teian?.teianNumber}: {teian?.title}
        </h1>
        <h3 className="text-xs">
          Submitted by {teian?.creator.name}, {formatDate(teian?.createdAt!)}
        </h3>
        <CardComponents className="text-xs space-y-2">
          <h2>Problem</h2>
          <p>{teian?.problem}</p>
        </CardComponents>
        <CardComponents className="text-xs space-y-2">
          <h2>Solution</h2>
          <p>{teian?.improvement}</p>
        </CardComponents>
        <h2 className="text-xs">Tracking Status</h2>
        <TrackingTimeline trackings={teian?.trackings!} />
        <div className="space-y-2 text-xs">
          <div className="flex justify-between items-center">
            <h2>Attachment</h2>
            <span>view all</span>
          </div>
          <div className="flex gap-2">
            {attachment?.imgBefore && (
              // <img src={attachment?.imgBefore} alt="" className="w-24 h-24" />
              <Image
                src={attachment?.imgBefore}
                alt="Before"
                width={96}
                height={171}
                sizes="96px"
                loading="eager"
                className="h-auto rounded-md object-cover"
              />
            )}
            {attachment?.imgAfter && (
              // <img src={attachment?.imgAfter} alt="" className="h-24" />
              <Image
                src={attachment.imgAfter}
                alt="After"
                width={96}
                height={171}
                sizes="96px"
                loading="eager"
                className="h-auto rounded-md object-cover"
              />
            )}
          </div>
        </div>
        <h2 className="text-xs">Recent Activity</h2>
        <CardComponents className="text-xs">
          <div className="flex gap-2 items-center">
            <div className="border rounded-full bg-gray-200 p-2">
              <User size={30} />
            </div>
            <div className="flex-1">
              <p>{teian?.creator.name} accept teian</p>
              <p>today, dan jam</p>
            </div>
          </div>
        </CardComponents>
        <div className="text-xs space-y-2">
          <h2>
            Comments {teian?.comments.length ? teian?.comments.length : ""}
          </h2>
          <div className="flex gap-2 items-center">
            <div className="border rounded-full bg-gray-200 p-2">
              <User size={30} />
            </div>
            <CardComponenent>
              <div className="text-xs">
                <p>nama</p>
                <p>isi komen</p>
                <p>today, dan jam</p>
              </div>
            </CardComponenent>
          </div>
        </div>
      </div>
    </div>
  );
}
