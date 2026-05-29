import { useHistory } from "react-router-dom";

const ProductCard = ({ product }) => {
  const history = useHistory();

  const isUpcoming = product.upcoming;

  const handleNavigation = () => {
    if (!isUpcoming) {
      history.push(`/product/${product.id}`);
    }
  };

  return (
    <div
      onClick={handleNavigation}
      role={!isUpcoming ? "button" : undefined}
      tabIndex={!isUpcoming ? 0 : -1}
      onKeyDown={(e) => {
        if (e.key === "Enter" && !isUpcoming) {
          history.push(`/product/${product.id}`);
        }
      }}
      aria-label={`View details for ${product.title}`}
      className={`group relative overflow-hidden rounded-[32px] border backdrop-blur-xl transition-all duration-500 ${
        isUpcoming
          ? "border-white/5 bg-[#0B1120]/60 opacity-[0.82] cursor-default"
          : "border-white/10 bg-[#0B1120]/95 cursor-pointer hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_25px_80px_-20px_rgba(37,99,235,0.35)]"
      }`}
    >
      {/* Background Glow */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${product.color} ${
          isUpcoming
            ? "opacity-[0.04]"
            : "opacity-[0.08] group-hover:opacity-[0.14]"
        } transition duration-500`}
      />

      {/* Top Line */}
      <div
        className={`absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r ${product.color} ${
          isUpcoming ? "opacity-40" : "opacity-100"
        }`}
      />

      <div className="relative z-10 p-7">
        {/* Header */}
        <div className="flex items-start gap-4">
          {/* Logo */}
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg ring-1 ${
              isUpcoming ? "bg-white/10 ring-white/5" : "bg-white ring-white/10"
            }`}
          >
            {product.logo ? (
              <img
                src={product.logo}
                alt={product.title}
                className="h-11 w-11 object-contain"
              />
            ) : (
              <span className="text-3xl">{product.icon}</span>
            )}
          </div>

          {/* Title */}
          <div>
            <p
              className={`text-[11px] uppercase tracking-[0.22em] font-medium ${
                isUpcoming ? "text-slate-600" : "text-slate-500"
              }`}
            >
              {isUpcoming ? "Upcoming Product" : "Live Product"}
            </p>

            <h3
              className={`mt-1 text-2xl font-semibold tracking-tight ${
                isUpcoming ? "text-slate-300" : "text-white"
              }`}
            >
              {product.title}
            </h3>
          </div>
        </div>

        {/* Tagline */}
        <p
          className={`mt-6 text-[15px] leading-7 line-clamp-3 ${
            isUpcoming ? "text-slate-500" : "text-slate-400"
          }`}
        >
          {product.tagline}
        </p>

        {/* Domain */}
        {product.domain && (
          <div
            className={`mt-5 inline-flex items-center rounded-full border px-4 py-2 text-xs font-medium ${
              isUpcoming
                ? "border-white/5 bg-white/[0.03] text-slate-500"
                : "border-white/10 bg-white/5 text-slate-300"
            }`}
          >
            {product.domain}
          </div>
        )}

        {/* Features */}
        <div className="mt-7 space-y-3">
          {product.features.slice(0, 3).map((feature) => (
            <div
              key={feature}
              className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm transition duration-300 ${
                isUpcoming
                  ? "border-white/[0.03] bg-white/[0.02] text-slate-500"
                  : "border-white/5 bg-white/[0.03] text-slate-300 group-hover:bg-white/[0.05]"
              }`}
            >
              <div
                className={`h-2 w-2 rounded-full bg-gradient-to-r ${product.color} ${
                  isUpcoming ? "opacity-50" : "opacity-100"
                }`}
              />

              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-5">
          {/* Status */}
          <div
            className={`rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] border backdrop-blur-md ${
              isUpcoming
                ? "bg-orange-500/5 text-orange-300/70 border-orange-400/10"
                : "bg-emerald-500/10 text-emerald-300 border-emerald-400/20"
            }`}
          >
            {isUpcoming ? "Coming Soon" : "Live"}
          </div>

          {/* CTA only for live */}
          {!isUpcoming && (
            <div className="flex items-center gap-2 text-sm font-medium text-white transition-transform duration-300 group-hover:translate-x-1">
              Explore
              <span>→</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
