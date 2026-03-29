"use client";

import { PropsWithChildren, useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { OverlayProvider } from "@/shared/system/overlay/OverlayContext";
import { createQueryClient } from "@/shared/system/query/queryClient";
import OverlayServiceBridge from "@/shared/system/overlay/OverlayServiceBridge";

export default function Providers({ children }: PropsWithChildren) {

  const [queryClient] = useState(() => createQueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <OverlayProvider>
        <OverlayServiceBridge />
        {children}
      </OverlayProvider>
    </QueryClientProvider>
  );
}