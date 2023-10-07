import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const Page = () => {
  return (
    <div className="flex px-20">
      <div className="basis-1/4 space-y-10">
        <Label className="text-5xl">Contact</Label>
        <div className="space-y-4">
          <Label className="text-2xl">Address</Label>
          <p>11350 McCormick Rd, EP III, Suite 200, Hunt Valley, MD 21031</p>
        </div>
        <div className="space-y-4">
          <Label className="text-2xl">Support Mail</Label>
          <p>support@flowbite.com</p>
        </div>
      </div>
      <div className="basis 3/4 flex grow">
        <Card className="w-full  ">
          <CardHeader className="">
            <CardTitle>Send mail </CardTitle>
            <CardContent className="space-y-4 ">
              <div className="space-y-1">
                <Label>
                  Your email address{" "}
                  <span className=" opacity-30">
                    {"(So we can reply to you)"}
                  </span>
                </Label>
                <Input type="mail"/>
              </div>

              <div className="space-y-1">
                <Label>
                  Subject{" "}
                  
                </Label>
                <Input type="text"/>
              </div>

              <div className="space-y-1">
                <Label>
                  Your message{" "}
                 
                </Label>
                <Textarea />
              </div>

             

            </CardContent>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default Page;
