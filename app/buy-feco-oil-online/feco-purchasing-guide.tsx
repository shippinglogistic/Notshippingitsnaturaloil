import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export function FECOPurchasingGuide() {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-8">FECO Purchasing Guide</h2>
          <p className="text-muted-foreground mb-8">
            When buying FECO oil online, consider these important factors to ensure you're getting the best product for
            your needs.
          </p>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  Lab Testing & Certificates of Analysis
                </h3>
                <p className="text-muted-foreground">
                  Always verify that FECO products include current Certificates of Analysis (COA) from independent
                  third-party labs. These should show cannabinoid potency, terpene profiles, and testing for
                  contaminants like pesticides, heavy metals, and residual solvents.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  Cannabinoid Ratios
                </h3>
                <p className="text-muted-foreground">
                  FECO is available in various ratios. THC-dominant FECO is best for strong effects, CBD-dominant for
                  non-psychoactive benefits, and 1:1 ratios for balanced effects. Choose based on your therapeutic
                  goals.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  Solvent Quality
                </h3>
                <p className="text-muted-foreground">
                  Premium FECO is typically made with food-grade ethanol through closed-loop extraction. This ensures
                  cleaner product with minimal residual solvents and better overall purity compared to traditional
                  methods.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  Product Forms
                </h3>
                <p className="text-muted-foreground">
                  FECO comes in multiple forms: syringes for precise dosing, capsules for convenience, suppositories for
                  alternative delivery, and tinctures for sublingual use. Each has different absorption rates and
                  effects duration.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  Storage & Shelf Life
                </h3>
                <p className="text-muted-foreground">
                  Proper storage is critical for maintaining FECO potency. Keep products in a cool, dark place away from
                  direct sunlight. Most FECO products remain stable for 6-12 months at room temperature when stored
                  correctly.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  Pricing & Bulk Options
                </h3>
                <p className="text-muted-foreground">
                  While price varies, more expensive FECO often reflects better quality control, sourcing, and testing.
                  Many retailers offer bulk discounts for customers committed to long-term use, making medical-grade
                  FECO more affordable.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  Shipping & Delivery
                </h3>
                <p className="text-muted-foreground">
                  Reputable FECO sellers use discreet packaging and tracked shipping. Ensure the seller complies with
                  local cannabis laws and provides order tracking so you can monitor delivery progress.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
