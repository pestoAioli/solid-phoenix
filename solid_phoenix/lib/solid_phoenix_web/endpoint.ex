defmodule SolidPhoenixWeb.Endpoint do
  use Phoenix.Endpoint, otp_app: :solid_phoenix

  # The session will be stored in the cookie and signed,
  # this means its contents can be read but not tampered with.
  # Set :encryption_salt if you would also like to encrypt it.
  @session_options [
    store: :cookie,
    key: "_solid_phoenix_key",
    signing_salt: "PJyJQjzL",
    same_site: "Lax"
  ]

  # socket "/live", Phoenix.LiveView.Socket, websocket: [connect_info: [session: @session_options]]
  socket("/socket", SolidPhoenixWeb.UserSocket,
    websocket: true,
    longpoll: false
  )

  plug(Corsica, origins: "*", allow_methods: :all, allow_headers: :all)

  # Serve at "/" the static files from "priv/static" directory.
  #
  # You should set gzip to true if you are running phx.digest
  # when deploying your static files in production.
  plug(Plug.Static,
    at: "/",
    from: :solid_phoenix,
    gzip: false,
    only: SolidPhoenixWeb.static_paths()
  )

  # Code reloading can be explicitly enabled under the
  # :code_reloader configuration of your endpoint.
  if code_reloading? do
    socket("/phoenix/live_reload/socket", Phoenix.LiveReloader.Socket)
    plug(Phoenix.LiveReloader)
    plug(Phoenix.CodeReloader)
    plug(Phoenix.Ecto.CheckRepoStatus, otp_app: :solid_phoenix)
  end

  plug(Plug.RequestId)
  plug(Plug.Telemetry, event_prefix: [:phoenix, :endpoint])

  plug(Plug.Parsers,
    parsers: [:urlencoded, :multipart, :json],
    pass: ["*/*"],
    json_decoder: Phoenix.json_library()
  )

  plug(Plug.MethodOverride)
  plug(Plug.Head)
  plug(Plug.Session, @session_options)
  plug(SolidPhoenixWeb.Router)
end
