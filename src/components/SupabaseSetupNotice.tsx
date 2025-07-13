
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, ExternalLink, CheckCircle } from "lucide-react";

const SupabaseSetupNotice = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-xl">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Database className="w-8 h-8 text-green-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            Supabase Setup Required
          </CardTitle>
          <p className="text-gray-600">
            Connect your project to Supabase to enable authentication and database features
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <h3 className="font-medium text-gray-900">Step 1: Connect to Supabase</h3>
                <p className="text-sm text-gray-600">
                  Click the green <strong>Supabase</strong> button in the top right of the Lovable interface
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <h3 className="font-medium text-gray-900">Step 2: Create or Connect Project</h3>
                <p className="text-sm text-gray-600">
                  Either create a new Supabase project or connect to an existing one
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <h3 className="font-medium text-gray-900">Step 3: Set Up Database Tables</h3>
                <p className="text-sm text-gray-600">
                  The following tables will be created automatically:
                </p>
                <ul className="text-xs text-gray-500 mt-1 ml-4 list-disc">
                  <li>profiles (user profiles with roles)</li>
                  <li>items (product listings)</li>
                  <li>orders (purchase orders)</li>
                  <li>deliveries (delivery tracking)</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-900 mb-2">What you'll get:</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Role-based authentication (Admin, Customer, Delivery Partner)</li>
              <li>• User profile management</li>
              <li>• Product listing and browsing</li>
              <li>• Order management system</li>
              <li>• Delivery tracking</li>
            </ul>
          </div>
          
          <Button 
            className="w-full bg-green-500 hover:bg-green-600" 
            onClick={() => window.open('https://docs.lovable.dev/integrations/supabase/', '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View Supabase Integration Docs
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SupabaseSetupNotice;
