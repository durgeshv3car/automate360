import React, { useState, useEffect } from "react";

export default function CampaignTable() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    // Ideally fetch from API — here it's hardcoded or imported from a JSON file
    import("./sampleCampaigns.json").then((data) => {
      setCampaigns(data.campaigns || []);
    });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Campaigns</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-3 py-2">Campaign Name</th>
              <th className="text-left px-3 py-2">OS</th>
              <th className="text-left px-3 py-2">Country</th>
              <th className="text-left px-3 py-2">Payout Type</th>
              <th className="text-left px-3 py-2">Payout Value</th>
              <th className="text-left px-3 py-2">Preview Link</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="px-3 py-2">{campaign["Campaign Name"] || campaign["CampaignName"]}</td>
                <td className="px-3 py-2">{campaign.OS}</td>
                <td className="px-3 py-2">{campaign.Country}</td>
                <td className="px-3 py-2">{campaign["Payout Type"]}</td>
                <td className="px-3 py-2">${campaign["Payout Value"]}</td>
                <td className="px-3 py-2">
                  <a
                    href={campaign["preview url"] || campaign.previewurl}
                    className="text-blue-600 underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View App
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
